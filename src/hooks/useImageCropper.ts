import { useState } from 'react';

const useImageCropper = () => {
  const [isOpenCropper, setIsOpenCropper] = useState(false);
  const openImageCropper = () => {
    setIsOpenCropper(true);
  };
  const closeImageCropper = () => {
    setIsOpenCropper(false);
  };
  return { isOpenCropper, openImageCropper, closeImageCropper };
};

export default useImageCropper;
