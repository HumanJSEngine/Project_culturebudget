import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { kakaoLogin } from '../api/memberApi';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const code = query.get('code');
  const error = query.get('error');
  const tryKakaoLogin = async () => {
    try {
      if (code) {
        const res = await kakaoLogin(code);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    code && tryKakaoLogin();
    error && navigate('/auth');
  }, [query]);
  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
