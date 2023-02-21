import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
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

const registerSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('이메일 입력은 필수입니다.')
      .email('이메일 형식이 아닙니다.'),
    nickName: yup
      .string()
      .trim()
      .required('닉네임 입력은 필수입니다.')
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        '닉네임에는 특수문자를 포함할 수 없습니다.'
      )
      .min(3, '닉네임은 3자리 이상이여야 합니다.')
      .max(8, '닉네임은 8자리까지 가능합니다.'),
    password: yup
      .string()
      .required('비밀번호 입력은 필수입니다.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        '비밀번호는 영문, 숫자 공백을 제외한 특수문자가 필수입니다.'
      )
      .min(8, '비밀번호는 8자리 이상이여야 합니다.')
      .max(16, '비밀번호는 16자리까지 가능합니다.'),
    checkPassword: yup
      .string()
      .required('비밀번호가 일치하지 않습니다.')
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
  })
  .required();

const Register = () => {
  const dispatch = useDispatch();
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema), mode: 'onChange' });
  const registerHandler = async ({ email, nickName, password }) => {
    const joinData = { email, nickName, password };
    try {
      const res = await memberJoin(joinData);
      const { data, status } = res;
      console.log(res);
      if (status === 'CREATED') {
        console.log(data);
        dispatch(loginUser(data));
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
      openPopup('에러가 발생하였습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Page>
      <Header
        title={'가입하기'}
        HeaderLeft={<HeaderGoBackButton position={'left'} />}
      />
      <Container>
        <FormArea onSubmit={handleSubmit(registerHandler)}>
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
                name={'password'}
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
                name={'check-password'}
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
            <Button primary>가입하기</Button>
            <Link to='/login'>
              <Button transparent>
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
