import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { memberJoin } from '../api/memberApi';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';
import Header from '../components/common/Header';
import HeaderGoBackButton from '../components/common/HeaderGoBackButton';
import InputAlertLabel from '../components/common/InputAlertLabel';
import Popup from '../components/common/Popup/Popup';
import usePopup from '../hooks/usePopup';
import { loginUser } from '../store/userReducer';
import Container from '../styles/Container';
import Page from '../styles/Page';
import colors from '../styles/Theme';
import { registerSchema } from '../types/Validation';

interface RegisterFormValue {
  email: string;
  nickName: string;
  password: string;
  checkPassword: string;
}

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValue>({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });
  const registerHandler = handleSubmit(
    async ({ email, nickName, password }) => {
      const joinData = { email, nickName, password };
      try {
        const res = await memberJoin(joinData);
        const { memberSeq, email, nickname, token, message } = res;
        // const { accessToken } = token;
        // dispatch(setAccessToken(accessToken));
        // localStorage.setItem('accessToken', accessToken);
        dispatch(loginUser({ memberSeq, email, nickname }));
      } catch (err) {
        console.log(err);
        openPopup('에러가 발생하였습니다. 다시 시도해주세요.');
      }
    }
  );

  return (
    <Page>
      <Header title={'가입하기'} HeaderLeft={<HeaderGoBackButton />} />
      <Container>
        <FormArea onSubmit={registerHandler}>
          <InputArea>
            <AuthTextArea>
              <FormInput
                type={'text'}
                placeholder={'이메일을 입력해 주세요.'}
                {...register('email')}
              />
              <InputAlertLabel state={errors.email ? 'warning' : 'success'}>
                {errors.email?.message}
              </InputAlertLabel>
            </AuthTextArea>
            <AuthTextArea>
              <FormInput
                type={'text'}
                placeholder={'닉네임을 입력해 주세요.'}
                {...register('nickName')}
              />
              <InputAlertLabel state={errors.nickName ? 'warning' : 'success'}>
                {errors.nickName?.message}
              </InputAlertLabel>
            </AuthTextArea>
            <AuthTextArea>
              <FormInput
                type={'password'}
                placeholder={'비밀번호를 입력해 주세요.'}
                autoComplete={'off'}
                {...register('password')}
              />
              <InputAlertLabel state={errors.password ? 'warning' : 'success'}>
                {errors.password?.message}
              </InputAlertLabel>
            </AuthTextArea>
            <AuthTextArea>
              <FormInput
                type={'password'}
                placeholder={'비밀번호를 다시 한번 입력해 주세요.'}
                autoComplete={'off'}
                {...register('checkPassword')}
              />
              <InputAlertLabel
                state={errors.checkPassword ? 'warning' : 'success'}
              >
                {errors.checkPassword?.message}
              </InputAlertLabel>
            </AuthTextArea>
          </InputArea>
          <ActionArea>
            <Button variant='primary'>가입하기</Button>
            <Link to='/login'>
              <Button variant='transparent'>
                이미 계정이 있으신가요?{' '}
                <TextUnderline>로그인하기</TextUnderline>
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
  gap: 64px;
  margin: 80px 16px 0 16px;
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

export default Register;
