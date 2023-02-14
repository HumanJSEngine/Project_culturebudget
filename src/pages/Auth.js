import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
const Auth = () => {
  return (
    <Page>
      <ButtonArea>
        <Button kakao>카카오로 가입하기</Button>
        <Link to='/register'>
          <Button primary>이메일로 가입하기</Button>
        </Link>
        <Link to='/login'>
          <Button transparent>로그인하기</Button>
        </Link>
      </ButtonArea>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  height: 100%;
  max-height: 800px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 16px;
`;

export default Auth;
