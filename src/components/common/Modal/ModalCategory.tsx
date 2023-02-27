import { MutableRefObject, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategory } from '../../../api/categoryApi';
import { CategoryInfo } from '../../../pages/Write';
import Header from '../Header';
import HeaderCloseButton from '../HeaderCloseButton';
import ModalListBack from './ModalListBack';
import ModalListItem from './ModalListItem';

interface ModalCategoryProps {
  closeModal: () => void;
  categoryRef: MutableRefObject<CategoryInfo>;
}

type CategoryViewType = 'default' | 'detail';
interface ModalCategoryInfo {
  ccSeq: number;
  ccName: string;
  cdclist: ModalDetailCategoryInfo[];
}
interface ModalDetailCategoryInfo {
  cdcSeq: number;
  cdcName: string;
}

const ModalCategory = ({ closeModal, categoryRef }: ModalCategoryProps) => {
  const [categoryView, switchCategoryView] =
    useState<CategoryViewType>('default');
  const [categoryList, setCategoryList] = useState<ModalCategoryInfo[]>([]);
  const [detailCategoryList, setDetailCategoryList] = useState<
    ModalDetailCategoryInfo[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo>();
  const getCategoryList = async () => {
    switchCategoryView('default');
    try {
      const res = await getCategory();
      const { cclist, message, status } = res;
      if (!status) {
        return console.log(message);
      }
      setCategoryList(cclist);
    } catch (err) {
      console.log(err);
    }
  };
  const getDetailCategoryList = async (
    categorySeq: number,
    categoryName: string
  ) => {
    setSelectedCategory({ categorySeq, categoryName });
    switchCategoryView('detail');
    const categoryArrIndex = categoryList.findIndex(
      (category) => category.ccSeq === categorySeq
    );
    setDetailCategoryList(categoryList[categoryArrIndex].cdclist);
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  const selectCategoryHandler = (categorySeq: number, categoryName: string) => {
    const categoryInfo = {
      categorySeq,
      categoryName,
    };
    categoryRef.current = categoryInfo;
    closeModal();
  };
  const selectDetailCategoryHandler = (
    categorySeq: number,
    categoryName: string
  ) => {
    const categoryInfo = {
      categorySeq: selectedCategory!.categorySeq,
      categoryName: selectedCategory!.categoryName,
      detailCategorySeq: categorySeq,
      detailCategoryName: categoryName,
    };
    categoryRef.current = categoryInfo;
    closeModal();
  };
  const backCategory = () => {
    setDetailCategoryList([]);
    switchCategoryView('default');
  };
  const list = categoryList.map(({ ccSeq, ccName, cdclist }) => (
    <ModalListItem
      key={ccSeq}
      seq={ccSeq}
      name={ccName}
      hasDetail={cdclist.length > 0}
      selectEvent={
        cdclist.length > 0 ? getDetailCategoryList : selectCategoryHandler
      }
    />
  ));
  const detailList = detailCategoryList.map(({ cdcSeq, cdcName }) => (
    <ModalListItem
      key={cdcSeq}
      seq={cdcSeq}
      name={cdcName}
      selectEvent={selectDetailCategoryHandler}
    />
  ));

  return (
    <Box>
      <Header
        title={'카테고리'}
        titlePosition={'left'}
        HeaderRight={<HeaderCloseButton event={closeModal} />}
        border={true}
      />
      <ModalContents>
        {categoryView === 'default' && <ModalList>{list}</ModalList>}
        {categoryView === 'detail' && (
          <ModalList>
            <ModalListBack
              name={selectedCategory!.categoryName}
              backEvent={backCategory}
            />
            {detailList}
          </ModalList>
        )}
      </ModalContents>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ModalContents = styled.div`
  width: 100%;
  height: 240px;
  padding: 0 16px;
  overflow-y: auto;
`;
const ModalList = styled.ul`
  width: 100%;
  height: 100%;
`;

export default ModalCategory;
