import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const code = query.get('code');
  const error = query.get('error');
  useEffect(() => {
    error && navigate('/auth');
  }, [query]);
  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
