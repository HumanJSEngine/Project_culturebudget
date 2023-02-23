import { useRef } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import 'cropperjs/dist/cropper.css';
import HeaderCloseButton from './HeaderCloseButton';
import HeaderButton from './HeaderButton';
import fonts from '../../styles/FontStyle';

interface ImageCropperProps {
  isOpenCropper: boolean;
  closeImageCropper: () => void;
  imgRef: HTMLInputElement;
  imgFile: string;
  setImgFile: () => void;
  setCropImg: (img: string) => void;
}

const ImageCropper = ({
  isOpenCropper,
  closeImageCropper,
  imgRef,
  imgFile,
  setImgFile,
  setCropImg,
}: ImageCropperProps) => {
  const cropperRef = useRef<ReactCropperElement | null>(null);
  const onCrop = () => {
    const imageElement = cropperRef.current;
    const cropper = imageElement.cropper;
    setCropImg(cropper.getCroppedCanvas().toDataURL('image/jpeg', 0.7));
  };
  const closeCropperHandler = () => {
    imgRef.current.value = null;
    setImgFile();
    closeImageCropper();
  };
  const onCropHandler = () => {
    onCrop();
    imgRef.current.value = null;
    setImgFile();
    closeImageCropper();
  };
  return (
    isOpenCropper && (
      <ImageCropperBox>
        <Header>
          <HeaderCloseButton event={closeCropperHandler} />
          <HeaderButton onClick={onCropHandler}>
            <ButtonText>완료</ButtonText>
          </HeaderButton>
        </Header>
        <Container>
          <Cropper
            src={imgFile}
            aspectRatio={1}
            dragMode={true}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            movable={true}
            checkOrientation={false}
            guides={true}
            rotatable={true}
            ref={cropperRef}
          />
        </Container>
      </ImageCropperBox>
    )
  );
};

const ButtonText = styled.span`
  color: ${colors.primary};
  font: ${fonts.score15Regular};
  line-height: 15px;
`;

const ImageCropperBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${colors.gray900};
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 50px;
  & .cropper-crop-box {
    & .cropper-view-box {
      outline: 1px solid rgba(255, 255, 255, 0.7) !important;
      outline-color: rgba(255, 255, 255, 0.7) !important;
    }
    & .cropper-point {
      background-color: rgba(255, 255, 255, 0.7) !important;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 4px;
  background: ${colors.white};
`;

export default ImageCropper;
