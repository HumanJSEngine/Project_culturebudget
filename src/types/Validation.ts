import * as yup from 'yup';

export const registerSchema = yup
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
      .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('이메일 입력은 필수입니다.')
      .email('이메일 형식이 아닙니다.'),
    password: yup.string().required('비밀번호를 입력해 주세요.'),
  })
  .required();
