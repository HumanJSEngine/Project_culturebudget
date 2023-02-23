import styled from 'styled-components';
import colors from '../../styles/Theme';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const WriteButton = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/write');
  };
  return (
    <Button onClick={onClickHandler}>
      <AiOutlinePlus size={24} />
    </Button>
  );
};

const Button = styled.button`
  position: fixed;
  right: 16px;
  bottom: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border: 0;
  border-radius: 50%;
  background: ${colors.primary};
  cursor: pointer;
  color: ${colors.white};
`;

export default WriteButton;
