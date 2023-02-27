import React from 'react';
import styled from 'styled-components';
import Page from '../styles/Page';
import Container from '../styles/Container';
import SettingCateList from '../components/setting/SettingCateList';
import Header from '../components/common/Header';
import AddCateList from '../components/setting/AddCateList';
import { useState, useEffect, useCallback } from 'react';
import CategoryStorage from '../api/localApi/CategoryStorage';
import axios from 'axios';

interface CategoryData {
  ccSeq: number;
  ccName: string;
}

const SetCategory = () => {
  const [cclist, setCclist] = useState<CategoryData[]>([]);

  const categoryStorage = new CategoryStorage();

  categoryStorage.setCategory();

  const categoryList = categoryStorage.getCategory();
  console.log(categoryList);

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(
        'http://haeji.mawani.kro.kr:8585/api/category/list'
      );
      setCclist(result.data.cclist);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addCclist = async () => {
    let cateName = prompt('추가할 카테고리명을 선택하세요');
    try {
      await axios
        .put(
          `http://haeji.mawani.kro.kr:8585/api/category/input?ccName=${cateName}`
        )
        .then((response) => {
          if (response.data.status) {
            alert(response.data.message);
            fetchData();
          } else {
            alert('카테고리 추가 실패');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page>
      <Header title={'카테고리 편집'} />
      <Container>
        <SettingList>
          <AddCateList addCclist={addCclist}>카테고리 추가</AddCateList>
          {cclist.map((list) => (
            <SettingCateList
              key={list.ccSeq}
              to={`/setcategory/${list.ccSeq}/${list.ccName}`}
              ccSeq={list.ccSeq}
              name={list.ccName}
              fetchData={fetchData}
            >
              {list.ccName}
            </SettingCateList>
          ))}
        </SettingList>
      </Container>
    </Page>
  );
};

const SettingList = styled.ul`
  width: 100%;
  padding: 0 16px;
`;

export default SetCategory;
