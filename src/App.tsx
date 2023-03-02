import React, { Suspense } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import List from './pages/List';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Stats from './pages/Stats';
import Setting from './pages/Setting';
import Write from './pages/Write';
import SetPayment from './pages/SetPayment';
import SetCategory from './pages/SetCategory';
import SettingCdclist from './components/setting/SettingCdclist';
import KakaoLogin from './pages/KakaoLogin';
import SetListType from './pages/SetListType';
import PType from './components/setting/PType';
import PrivateRoute from './PrivateRoute';
import { RecoilRoot } from 'recoil';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route element={<PrivateRoute authentication={false} />}>
              <Route path={'/auth'} element={<Auth />} />
              <Route path={'/auth/kakao'} element={<KakaoLogin />} />
              <Route path={'/register'} element={<Register />} />
              <Route path={'/login'} element={<Login />} />
            </Route>
            <Route element={<PrivateRoute authentication={true} />}>
              <Route path={'/'} element={<List />} />
              <Route path={'/calendar'} element={<Calendar />} />
              <Route path={'/stats'} element={<Stats />} />
              <Route path={'/setting'} element={<Setting />} />
              <Route path={'/setlisttype'} element={<SetListType />} />
              <Route path={'/setpayment'} element={<SetPayment />} />
              <Route path={'/ptype/:name'} element={<PType />} />
              <Route path={'/setcategory'} element={<SetCategory />} />
              <Route
                path={'/setcategory/:no/:name'}
                element={<SettingCdclist />}
              />
              <Route path={'/write'} element={<Write />} />
              <Route path={'/userinfo'} element={<UserInfo />} />
              <Route path={'*'} element={<Navigate to='/' />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
