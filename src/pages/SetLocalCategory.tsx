import React from 'react';
import styled from 'styled-components';
import Page from '../styles/Page';
import Container from '../styles/Container';
import Header from '../components/common/Header';
import { useState, useEffect } from 'react';
import CategoryStorage from '../api/localApi/CategoryStorage';
import SettingLocalCateList from '../components/setting/SettingLocalCateList';
import { LocalCategoryData } from '../types/Local';
import AddLocalCateList from '../components/setting/AddLocalCateList';

const SetLocalCategory = () => {
  const [categoryList, setCategoryList] = useState<LocalCategoryData[]>([]);

  const categoryStorage = new CategoryStorage();

  const getCategoryList = async () => {
    try {
      const res = await categoryStorage.getCategory();
      setCategoryList(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const addCategory = () => {
    let categoryName;
    while (!categoryName) {
      categoryName = prompt('추가할 카테고리명을 선택하세요');
    }
    try {
      categoryStorage.addCategory(categoryName);
      getCategoryList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Page>
      <Header title={'카테고리 편집'} />
      <Container>
        <SettingList>
          <AddLocalCateList addCategory={addCategory}>
            카테고리 추가
          </AddLocalCateList>
          {categoryList.map((category) => (
            <SettingLocalCateList
              key={category.categoryId}
              categoryId={category.categoryId}
              categoryName={category.categoryName}
              getCategoryList={getCategoryList}
            />
          ))}
        </SettingList>
      </Container>
    </Page>
  );
};

const SettingList = styled.ul`
  width: 100%;
`;

export default SetLocalCategory;
