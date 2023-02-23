import { useRef, useState } from 'react';

const usePopup = () => {
  const popupMessage = useRef<string | null>(null);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const openPopup = (message: string) => {
    popupMessage.current = message;
    setIsOpenPopup(true);
  };
  const closePopup = () => {
    popupMessage.current = null;
    setIsOpenPopup(false);
  };
  return { isOpenPopup, popupMessage, openPopup, closePopup };
};

export default usePopup;
