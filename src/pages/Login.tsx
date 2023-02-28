import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/Theme';
import Page from '../styles/Page';
import Container from '../styles/Container';
import FormInput from '../components/common/FormInput';
import InputAlertLabel from '../components/common/InputAlertLabel';
import Header from '../components/common/Header';
import HeaderGoBackButton from '../components/common/HeaderGoBackButton';
import Button from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { memberLogin } from '../api/memberApi';
import Popup from '../components/common/Popup/Popup';
import usePopup from '../hooks/usePopup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/userReducer';
import { loginSchema } from '../types/Validation';

interface LoginFormVlaue {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormVlaue>({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  });
  const loginHandler = handleSubmit(async ({ email, password }) => {
    const loginData = { email, password };
    try {
      const res = await memberLogin(loginData);
      // const { memberSeq, email, nickname, token, message } = res;
      // const { accessToken } = token;
      // dispatch(setAccessToken(accessToken));
      // localStorage.setItem('accessToken', accessToken);
      // dispatch(loginUser({ memberSeq, email, nickname }));
      // navigate('/');
    } catch (err) {
      console.log(err);
      openPopup('에러가 발생하였습니다. 다시 시도해주세요.');
    }
  });

  return (
    <Page>
      <Header title={'로그인'} HeaderLeft={<HeaderGoBackButton />} />
      <Container>
        <FormArea onSubmit={loginHandler}>
          <InputArea>
            <AuthTextArea>
              <FormInput
                type={`text`}
                placeholder={'이메일을 입력해 주세요.'}
                {...register('email')}
              />
              <InputAlertLabel state={errors.email ? 'warning' : 'success'}>
                {errors.email?.message}
              </InputAlertLabel>
            </AuthTextArea>
            <AuthTextArea>
              <FormInput
                type={`password`}
                placeholder={'비밀번호를 입력해 주세요.'}
                autoComplete={'off'}
                {...register('password')}
              />
              <InputAlertLabel state={errors.password ? 'warning' : 'success'}>
                {errors.password?.message}
              </InputAlertLabel>
            </AuthTextArea>
          </InputArea>
          <ActionArea>
            <Button variant='primary'>로그인</Button>
            <Link to='/register'>
              <Button variant='transparent'>
                계정이 없으신가요? <TextUnderline>회원가입하기</TextUnderline>
              </Button>
            </Link>
          </ActionArea>
        </FormArea>
      </Container>
      <Popup
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
        message={popupMessage.current}
        buttonText={'확인'}
      />
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

const AuthTextArea = styled.div`
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
