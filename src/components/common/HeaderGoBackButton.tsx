import useGoBack from '../../hooks/useGoBack';
import HeaderButton from './HeaderButton';
import IconBox from '../../styles/IconBox';
import { TfiArrowLeft } from 'react-icons/tfi';

const HeaderGoBackButton = () => {
  const goBack = useGoBack();
  return (
    <HeaderButton onClick={goBack}>
      <IconBox>{<TfiArrowLeft size={16} />}</IconBox>
    </HeaderButton>
  );
};

export default HeaderGoBackButton;
