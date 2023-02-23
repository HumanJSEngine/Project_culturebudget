import useGoBack from '../../hooks/useGoBack';
import HeaderButton from './HeaderButton';
import IconBox from '../../styles/IconBox';
import { TfiClose } from 'react-icons/tfi';

interface HeaderCloseButtonProps {
  event: () => void;
}

const HeaderCloseButton = ({ event }: HeaderCloseButtonProps) => {
  const goBack = useGoBack();
  return (
    <HeaderButton onClick={() => (event ? event() : goBack())}>
      <IconBox>
        <TfiClose size={16} />
      </IconBox>
    </HeaderButton>
  );
};

export default HeaderCloseButton;
