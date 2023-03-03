import moment from 'moment';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addPost, PostParameter } from '../api/postApi';
import Header from '../components/common/Header';
import HeaderButton from '../components/common/HeaderButton';
import HeaderCloseButton from '../components/common/HeaderCloseButton';
import ImageCropper from '../components/common/ImageCropper';
import Loading from '../components/common/Loading';
import Modal from '../components/common/Modal/Modal';
import ModalCategory from '../components/common/Modal/ModalCategory';
import ModalDate from '../components/common/Modal/ModalDate';
import ModalPayment from '../components/common/Modal/ModalPayment';
import Popup from '../components/common/Popup/Popup';
import PhotoContents from '../components/write/PhotoContents';
import WriteFormNumber from '../components/write/WriteFormNumber';
import WriteFormSelect from '../components/write/WriteFormSelect';
import WriteFormText from '../components/write/WriteFormText';
import WriteFormTextArea from '../components/write/WriteFormTextArea';
import WriteFormTitle from '../components/write/WriteFormTitle';
import useImageCropper from '../hooks/useImageCropper';
import useModal from '../hooks/useModal';
import usePopup from '../hooks/usePopup';
import Container from '../styles/Container';
import fonts from '../styles/FontStyle';
import Page from '../styles/Page';
import colors from '../styles/Theme';
import GetMemberNumber from '../utils/GetMemberNumber';

export interface CategoryInfo {
  categorySeq: number;
  categoryName: string;
  detailCategorySeq?: number;
  detailCategoryName?: string;
}
export interface PaymentInfo {
  paymentSeq: number;
  paymentName: string;
}

const Write = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoding] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<any>(null);
  const [imgFile, setImgFile] = useState<string>('');
  const [cropImg, setCropImg] = useState<string>('');
  const placeRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<string>(moment().format('YYYY-MM-DDTHH:mm:ss'));
  const categoryRef = useRef<CategoryInfo>({
    categorySeq: 0,
    categoryName: '',
  });
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const paymentRef = useRef<PaymentInfo>({
    paymentSeq: 0,
    paymentName: '',
  });
  const payPlaceRef = useRef<HTMLInputElement>(null);
  const [payPrice, setPayPrice] = useState<string>('');
  const memberNumber = GetMemberNumber();
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const { openedModal, openModal, closeModal } = useModal();
  const { isOpenCropper, openImageCropper, closeImageCropper } =
    useImageCropper();

  const handleDateSelect = () => {
    openModal(<ModalDate closeModal={closeModal} timeRef={timeRef} />);
  };

  const handleCategorySelect = () => {
    openModal(
      <ModalCategory closeModal={closeModal} categoryRef={categoryRef} />
    );
  };

  const handlePaymentSelect = () => {
    openModal(<ModalPayment closeModal={closeModal} paymentRef={paymentRef} />);
  };

  const postSubmitHandler = async () => {
    setIsLoding(true);
    if (checkValidation()) {
      setIsLoding(false);
      return;
    }

    const bstr = atob(cropImg.split(',')[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const imageFile = new File([u8arr], `${Date.now()}.jpeg`, {
      type: 'image/jpeg',
    });

    const postData: PostParameter = {
      ehTitle: titleRef.current!.value,
      ehDate: timeRef.current,
      ehMiSeq: memberNumber,
      ehPiSeq: paymentRef.current?.paymentSeq,
      ehPrice: Number(payPrice.replace(/,/g, '')),
      ehStoreName: payPlaceRef.current?.value,
      ehLocation: placeRef.current?.value,
      ehBalance: 10000,
      ehCcSeq: categoryRef.current?.categorySeq,
      ehCdcSeq: categoryRef.current?.detailCategorySeq,
      ehContent: contentRef.current?.value,
      ehImgFile: imageFile,
    };

    try {
      const res = await addPost(postData);
      const { status } = res;
      if (!status) {
        openPopup('문제가 발생하였습니다. 다시 시도해주세요.');
        setIsLoding(false);
        return;
      }
      setIsLoding(false);
      navigate('/');
    } catch (err) {
      openPopup('에러가 발생하였습니다. 다시 시도해주세요.');
      setIsLoding(false);
    }
  };

  const checkValidation = () => {
    if (!titleRef.current?.value.trim()) {
      openPopup('제목을 입력해 주세요.');
      return true;
    }
    if (!cropImg) {
      openPopup('사진을 등록해 주세요.');
      return true;
    }
    if (!placeRef.current?.value) {
      openPopup('장소를 입력해 주세요.');
      return true;
    }
    if (!timeRef.current) {
      openPopup('시간을 선택해 주세요.');
      return true;
    }
    if (categoryRef.current.categorySeq === 0) {
      openPopup('카테고리를 선택해 주세요.');
      return true;
    }
    if (paymentRef.current.paymentSeq === 0) {
      openPopup('결제 수단을 선택해 주세요.');
      return true;
    }
    if (!payPlaceRef.current?.value) {
      openPopup('결제처를 입력해 주세요.');
      return true;
    }
    if (payPrice === '') {
      openPopup('금액을 입력해 주세요.');
      return true;
    }
    return false;
  };

  const clickImageEvent = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result as string);
    };
    openImageCropper();
  };

  return (
    <Page>
      <Header
        title={'기록하다'}
        HeaderLeft={<HeaderCloseButton />}
        HeaderRight={
          <HeaderButton
            onClick={postSubmitHandler}
            disabled={isLoading && true}
          >
            <ButtonText>등록</ButtonText>
          </HeaderButton>
        }
      />
      <Container>
        <WriteForm>
          <WriteInfo>
            <WriteFormTitle textRef={titleRef} />
            <PhotoContents
              imgRef={imgRef}
              cropImg={cropImg}
              clickImageEvent={clickImageEvent}
            />
          </WriteInfo>
          <WriteFormText title={'장소'} textRef={placeRef} />
          <WriteFormSelect
            title={'날짜'}
            value={moment(timeRef.current).format('YYYY/MM/DD A hh : mm')}
            selectEvent={handleDateSelect}
          />
          <WriteFormSelect
            title={'카테고리'}
            value={
              !categoryRef.current.categoryName
                ? ''
                : `${categoryRef.current.categoryName} ${
                    !categoryRef.current.detailCategoryName
                      ? ''
                      : ' > ' + categoryRef.current.detailCategoryName
                  }`
            }
            selectEvent={handleCategorySelect}
          />
          <WriteFormTextArea title={'내용'} textRef={contentRef} />
          <WriteFormSelect
            title={'결제 수단'}
            value={
              !paymentRef.current ? '' : `${paymentRef.current.paymentName}`
            }
            selectEvent={handlePaymentSelect}
          />
          <WriteFormText title={'결제처'} textRef={payPlaceRef} />
          <WriteFormNumber
            title={'금액'}
            value={payPrice}
            setValue={setPayPrice}
          />
        </WriteForm>
        {isLoading && <Loading />}
      </Container>
      <Modal openedModal={openedModal} closeModal={closeModal} />
      <Popup
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
        message={popupMessage.current}
        buttonText={'확인'}
      />
      <ImageCropper
        isOpenCropper={isOpenCropper}
        closeImageCropper={closeImageCropper}
        imgRef={imgRef}
        setImgFile={setImgFile}
        imgFile={imgFile}
        setCropImg={setCropImg}
      />
    </Page>
  );
};

const ButtonText = styled.span`
  color: ${colors.primary};
  font: ${fonts.score15Regular};
  line-height: 15px;
`;

const WriteForm = styled.div`
  width: 100%;
  padding: 32px 16px;
`;

const WriteInfo = styled.div`
  display: flex;
  gap: 16px;
`;

export default Write;
