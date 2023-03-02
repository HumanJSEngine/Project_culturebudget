import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { memberLogut } from '../api/memberApi';
import BottomNavigation from '../components/common/BottomNavigation';
import Header from '../components/common/Header';
import SettingListItem from '../components/setting/SettingListItem';
import { clearUser } from '../store/userReducer';
import Container from '../styles/Container';
import Page from '../styles/Page';

const Setting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoutHandler = async () => {
    try {
      await memberLogut();
      dispatch(clearUser());
      navigate('/auth');
    } catch (err) {}
  };
  return (
    <Page>
      <Header title={'설정'} />
      <Container>
        <SettingList>
          <SettingListItem to='/userinfo'>내 정보 관리</SettingListItem>
          <SettingListItem to='/setlisttype'>리스트 형태 편집</SettingListItem>
          <SettingListItem to='/setcategory'>카테고리 편집</SettingListItem>
          <SettingListItem to='/setpayment'>결제 수단 편집</SettingListItem>
          <SettingListItem event={onLogoutHandler}>로그아웃</SettingListItem>
        </SettingList>
      </Container>
      <BottomNavigation />
    </Page>
  );
};

export const SettingList = styled.ul`
  width: 100%;
  padding: 0 16px;
`;

export default Setting;
