import { Link } from 'react-router-dom';
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
import * as yup from 'yup';
import { memberLogin } from '../api/memberApi';
import Popup from '../components/common/Popup/Popup';
import usePopup from '../hooks/usePopup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/userReducer';

const loginSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('이메일 입력은 필수입니다.')
      .email('이메일 형식이 아닙니다.'),
    password: yup.string().required('비밀번호를 입력해 주세요.'),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onClick' });
  const loginHandler = async ({ email, password }) => {
    const loginData = { email, password };
    try {
      const res = await memberLogin(loginData);
      console.log(res);
      const { data, status, message } = res;
      if (!status) {
        openPopup(message);
        return;
      }
      dispatch(loginUser(data));
    } catch (err) {
      console.log(err);
      openPopup('에러가 발생하였습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Page>
      <Header
        title={'로그인'}
        HeaderLeft={<HeaderGoBackButton position={'left'} />}
      />
      <Container>
        <FormArea onSubmit={handleSubmit(loginHandler)}>
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
                name={'password'}
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
            <Button primary>로그인</Button>
            <Link to="/register">
              <Button transparent>
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
