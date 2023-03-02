import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { deleteMember } from '../api/memberApi';
import Header from '../components/common/Header';
import HeaderGoBackButton from '../components/common/HeaderGoBackButton';
import SelectPopup from '../components/common/Popup/SelectPopup';
import SettingListItem from '../components/setting/SettingListItem';
import usePopup from '../hooks/usePopup';
import { clearUser } from '../store/userReducer';
import Container from '../styles/Container';
import Page from '../styles/Page';
import colors from '../styles/Theme';
import GetMemberNumber from '../utils/GetMemberNumber';
import { removeToken } from '../utils/setToken';
import { SettingList } from './Setting';

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const memberNumber = GetMemberNumber();
  const onDeleteAccount = () => {
    openPopup('정말 탈퇴하시겠습니까?');
  };
  const onSubmitDeleteAccount = async () => {
    try {
      const res = await deleteMember(memberNumber);
      dispatch(clearUser());
      removeToken();
      closePopup();
      navigate('/auth');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Page>
      <Header title={'회원 정보 수정'} HeaderLeft={<HeaderGoBackButton />} />
      <Container>
        <SettingList>
          <SettingListItem event={onDeleteAccount}>
            <WarningText>탈퇴하기</WarningText>
          </SettingListItem>
        </SettingList>
      </Container>
      <SelectPopup
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
        submitPopup={onSubmitDeleteAccount}
        message={popupMessage.current}
        submitText={'확인'}
        closeText={'취소'}
      />
    </Page>
  );
};

const WarningText = styled.span`
  color: ${colors.error};
`;

export default UserInfo;
