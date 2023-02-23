import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import colors from '../../styles/Theme';

interface PhotoContentsProps {
  imgRef: HTMLInputElement;
  cropImg: string;
  clickImageEvent: () => void;
}

const PhotoContents = ({
  imgRef,
  cropImg,
  clickImageEvent,
}: PhotoContentsProps) => {
  return cropImg ? (
    <ImageBox>
      <label htmlFor='image_upload'>
        <input
          type='file'
          accept='image/*'
          name='image_upload'
          id='image_upload'
          onChange={clickImageEvent}
          ref={imgRef}
          hidden
        />
        <img src={cropImg} alt='이미지 파일' />
      </label>
    </ImageBox>
  ) : (
    <Box>
      <label htmlFor='image_upload'>
        <input
          type='file'
          accept='image/*'
          name='image_upload'
          id='image_upload'
          onChange={clickImageEvent}
          ref={imgRef}
          hidden
        />
        <IconBox>
          <AiFillCamera size={24} />
        </IconBox>
      </label>
    </Box>
  );
};

const ImageBox = styled.div`
  width: 56px;
  height: 56px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 56px;
  height: 56px;
  background: ${colors.primary};
`;

const IconBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${colors.white};
`;

export default PhotoContents;
