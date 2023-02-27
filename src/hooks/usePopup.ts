import { useRef, useState } from 'react';

const usePopup = () => {
  const popupMessage = useRef<string>('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const openPopup = (message: string) => {
    popupMessage.current = message;
    setIsOpenPopup(true);
  };
  const closePopup = () => {
    popupMessage.current = '';
    setIsOpenPopup(false);
  };
  return { isOpenPopup, popupMessage, openPopup, closePopup };
};

export default usePopup;
