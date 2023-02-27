import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import { useState } from 'react';
import List from './pages/List';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Stats from './pages/Stats';
import Setting from './pages/Setting';
import Post from './pages/Post';
import Write from './pages/Write';
import SetCategory from './pages/SetCategory';
import SetPayment from './pages/SetPayment';
import SettingCdclist from './components/setting/SettingCdclist';
import SetLocalCategory from './pages/SetLocalCategory';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        {!isLogin && <Route index element={<Auth />} />}
        {isLogin && <Route index element={<List />} />}
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/calendar'} element={<Calendar />} />
        <Route path={'/stats'} element={<Stats />} />
        <Route path={'/setting'} element={<Setting />} />
        <Route path={'/setpayment'} element={<SetPayment />} />
        <Route path={'/setcategory'} element={<SetLocalCategory />} />
        <Route path={'/setcategory/:no/:name'} element={<SettingCdclist />} />
        <Route path={'/post'} element={<Post />} />
        <Route path={'/write'} element={<Write />} />
        <Route path={'*'} element={<Navigate to='/' />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
