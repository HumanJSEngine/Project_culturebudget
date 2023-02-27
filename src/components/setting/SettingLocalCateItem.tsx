import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryStorage from '../../api/localApi/CategoryStorage';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

interface SettingLocalCateListProps {
  categoryId: number;
  categoryName: string;
  getCategoryList: () => Promise<void>;
}

const SettingLocalCateList = ({
  categoryId,
  categoryName,
  getCategoryList,
}: SettingLocalCateListProps) => {
  const categoryStorage = new CategoryStorage();

  const removeCategoryList = async () => {
    try {
      categoryStorage.removeCategory(categoryId);
      getCategoryList();
    } catch (err) {
      console.log(err);
    }
  };

  const editCategoryList = async () => {
    const changeValue = prompt('수정할 카테고리명을 선택하세요');
    if (!changeValue) {
      return;
    }
    try {
      categoryStorage.editCategory(categoryId, changeValue);
      getCategoryList();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <Minus onClick={() => removeCategoryList()}>-</Minus>
      <Catelist>
        <ItemName onClick={() => editCategoryList()}>{categoryName}</ItemName>
        <Link to={'/'}>
          <SlArrowRight size={12} />
        </Link>
      </Catelist>
    </Box>
  );
};

const Box = styled.li`
  display: flex;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0 10px;
  padding: 0px 16px;
`;

const Minus = styled.button`
  width: 15px;
  height: 15px;
  background: #e23636;
  border-radius: 50%;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Catelist = styled.div`
  width: 100%;
  max-width: 330px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray200};
  padding: 10px 0px;
`;

const ItemName = styled.span`
  color: ${colors.gray900};
  font: ${fonts.score15Regular};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default SettingLocalCateList;
