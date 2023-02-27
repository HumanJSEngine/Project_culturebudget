import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/common/Header';
import HeaderGoBackButton from '../components/common/HeaderGoBackButton';
import SettingRadioItem from '../components/setting/SettingListRadioItem';
import { modifyListType } from '../store/settingReducer';
import { RootState } from '../store/store';
import Container from '../styles/Container';
import Page from '../styles/Page';

const SetListType = () => {
  const dispatch = useDispatch();
  const { listType } = useSelector((state: RootState) => state.setting);
  const checkRadioEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedListType = e.target.id;
    dispatch(modifyListType(selectedListType));
  };
  return (
    <Page>
      <Header title='리스트 형태 편집' HeaderLeft={<HeaderGoBackButton />} />
      <Container>
        <SettingListType>
          <SettingRadioItem
            title='리스트 타입'
            value='default'
            radioValue={listType}
            checkRadio={checkRadioEvent}
          />
          <SettingRadioItem
            title='갤러리 타입'
            value='gallery'
            radioValue={listType}
            checkRadio={checkRadioEvent}
          />
        </SettingListType>
      </Container>
    </Page>
  );
};

const SettingListType = styled.ul`
  width: 100%;
  padding: 0 16px;
`;

export default SetListType;
