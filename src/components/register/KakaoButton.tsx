import styled from 'styled-components';
import colors from '../../styles/Theme';

const KakaoButton = () => {
  return <Button>카카오로 가입하기</Button>;
};

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  color: ${colors.kakaoLabel};
  background: ${colors.kakaoContainer};
  border-radius: 8px;
`;

export default KakaoButton;
