import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/Theme';
import Page from '../styles/Page';
import Container from '../styles/Container';
import FormInput from '../components/common/FormInput';
import PrimaryButton from '../components/common/PrimaryButton';
import TransparentButton from '../components/common/TransparentButton';

const Login = () => {
  return (
    <Page>
      <Container>
        <FormArea>
          <InputArea>
            <AuthText>
              <FormInput type={`text`} placeholder={'이메일을 입력해 주세요.'} />
            </AuthText>
            <AuthText>
              <FormInput type={`password`} placeholder={'비밀번호를 다시 한번 입력해 주세요.'} />
            </AuthText>
          </InputArea>
          <ActionArea>
            <PrimaryButton>로그인하기</PrimaryButton>
            <Link to='/register'>
              <TransparentButton>
                계정이 없으신가요? <TextUnderline>회원가입하기</TextUnderline>
              </TransparentButton>
            </Link>
          </ActionArea>
        </FormArea>
      </Container>
    </Page>
  );
};

const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 100px 16px 0 16px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AuthText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ActionArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TextUnderline = styled.span`
  border-bottom: 1px solid ${colors.primary};
`;

export default Login;
