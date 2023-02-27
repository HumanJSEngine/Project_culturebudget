import styled from 'styled-components';
import colors from '../styles/Theme';
import fonts from '../styles/FontStyle';
import Container from '../styles/Container';
import Header from '../components/common/Header';
import HeaderCloseButton from '../components/common/HeaderCloseButton';
import HeaderButton from '../components/common/HeaderButton';
import IconBox from '../styles/IconBox';
import { FiMoreHorizontal } from 'react-icons/fi';
import useModal from '../hooks/useModal';
import Modal from '../components/common/Modal/Modal';
import ModalPost from '../components/common/Modal/ModalPost';
import moment from 'moment';
import { BudgetData } from '../types/Budget';

interface PostProps {
  postData: BudgetData | null;
  closePost: () => void;
}

const Post = ({ postData, closePost }: PostProps) => {
  const { openedModal, openModal, closeModal } = useModal();
  const handlePostMore = () => {
    openModal(<ModalPost closeModal={closeModal} postSeq={1} />);
  };
  const { VITE_IMAGE_URL } = import.meta.env;
  return (
    <>
      {postData && (
        <Page>
          <Header
            HeaderLeft={<HeaderCloseButton event={closePost} />}
            HeaderRight={
              <HeaderButton onClick={handlePostMore}>
                <IconBox>
                  <FiMoreHorizontal size={16} />
                </IconBox>
              </HeaderButton>
            }
          />
          <Container>
            <PhotoArea>
              <img src={`${VITE_IMAGE_URL}/${postData.ehImgFile}`} alt='' />
              <ContentsInfo>
                <ContentsInfoItem>{postData.ehLocation}</ContentsInfoItem>
                <ContentsInfoItem>
                  {moment(postData.ehDate).format('YYYY.MM.DD')}
                </ContentsInfoItem>
              </ContentsInfo>
            </PhotoArea>
            <ContentsArea>
              <MainContents>
                {/* <Category>{category} {'>'} {detailCategory}</Category> */}
                <Title>{postData.ehTitle}</Title>
                <MainText>{postData.ehContent}</MainText>
              </MainContents>
              <BudgetContents>
                <BudgetPrice>{`${postData.ehPrice.toLocaleString()}원`}</BudgetPrice>
                <BudgetInfo>
                  <BudgetInfoItem>{postData.ehStoreName}</BudgetInfoItem>
                  <BudgetInfoItem>결제 수단</BudgetInfoItem>
                </BudgetInfo>
              </BudgetContents>
            </ContentsArea>
          </Container>
          <Modal openedModal={openedModal} closeModal={closeModal} />
        </Page>
      )}
    </>
  );
};

const Page = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const PhotoArea = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: ${colors.gray300};
  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentsInfo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 16px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.5);
`;

const ContentsInfoItem = styled.span`
  color: ${colors.white};
  font: ${fonts.score13Regular};
`;

const ContentsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 16px;
  background: ${colors.white};
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.gray200};
`;

const Category = styled.p`
  color: ${colors.gray700};
  font: ${fonts.score12Regular};
`;

const Title = styled.p`
  color: ${colors.gray900};
  font-size: 20px;
  font-weight: 500;
`;

const MainText = styled.p`
  color: ${colors.gray800};
  font: ${fonts.score15Regular};
  line-height: 1.4;
  white-space: pre-wrap;
`;

const BudgetContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-top: 16px;
`;

const BudgetPrice = styled.p`
  color: ${colors.gray900};
  font: ${fonts.score15Medium};
`;

const BudgetInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

const BudgetInfoItem = styled.span`
  color: ${colors.gray700};
  font: ${fonts.score13Regular};
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 6px;
    margin-left: 8px;
    background: ${colors.gray700};
    vertical-align: 2px;
  }
  &:last-child::after {
    content: none;
  }
`;

export default Post;
