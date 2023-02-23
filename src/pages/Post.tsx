import { useState } from 'react';
import styled from 'styled-components';
import colors from '../styles/Theme';
import fonts from '../styles/FontStyle';
import Page from '../styles/Page';
import Container from '../styles/Container';
import Header from '../components/common/Header';
import HeaderCloseButton from '../components/common/HeaderCloseButton';
import HeaderButton from '../components/common/HeaderButton';
import IconBox from '../styles/IconBox';
import { FiMoreHorizontal } from 'react-icons/fi';
import useModal from '../hooks/useModal';
import Modal from '../components/common/Modal/Modal';
import ModalPost from '../components/common/Modal/ModalPost';

const Post = () => {
  const { openedModal, openModal, closeModal } = useModal();

  const [category, setCategory] = useState('카테고리');
  const [detailCategory, setDetailCategory] = useState('세부 카테고리');
  const handlePostMore = () => {
    openModal(<ModalPost closeModal={closeModal} postSeq={1} />);
  };
  return (
    <Page>
      <Header
        title={'작성하다'}
        HeaderLeft={<HeaderCloseButton />}
        HeaderRight={
          <HeaderButton onClick={handlePostMore}>
            <IconBox>
              <FiMoreHorizontal size={16} />
            </IconBox>
          </HeaderButton>
        }
      />
      <Container>
        <PhotoArea>
          <ContentsInfo>
            <ContentsInfoItem>장소</ContentsInfoItem>
            <ContentsInfoItem>2022.02.02</ContentsInfoItem>
          </ContentsInfo>
        </PhotoArea>
        <ContentsArea>
          <MainContents>
            <Category>
              {category} {'>'} {detailCategory}
            </Category>
            <Title>제목입니다.</Title>
            <MainText>
              내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
            </MainText>
          </MainContents>
          <BudgetContents>
            <BudgetPrice>{'10,000원'}</BudgetPrice>
            <BudgetInfo>
              <BudgetInfoItem>결제처</BudgetInfoItem>
              <BudgetInfoItem>결제 수단</BudgetInfoItem>
            </BudgetInfo>
          </BudgetContents>
        </ContentsArea>
      </Container>
      <Modal openedModal={openedModal} closeModal={closeModal} />
    </Page>
  );
};

const PhotoArea = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: ${colors.gray300};
`;

const ContentsInfo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 16px;
  padding: 12px 16px;
`;

const ContentsInfoItem = styled.span`
  color: ${colors.gray900};
  font: ${fonts.score13Regular};
`;

const ContentsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 16px;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.gray200};
`;

const Category = styled.p`
  color: ${colors.gray700};
  font: ${fonts.score12Regular};
`;

const Title = styled.p`
  color: ${colors.gray900};
  font-size: 20px;
  font-weight: 500;
`;

const MainText = styled.p`
  color: ${colors.gray800};
  font: ${fonts.score15Regular};
`;

const BudgetContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-top: 16px;
`;

const BudgetPrice = styled.p`
  color: ${colors.gray900};
  font: ${fonts.score15Medium};
`;

const BudgetInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

const BudgetInfoItem = styled.span`
  color: ${colors.gray700};
  font: ${fonts.score13Regular};
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 6px;
    margin-left: 8px;
    background: ${colors.gray700};
    vertical-align: 2px;
  }
  &:last-child::after {
    content: none;
  }
`;

export default Post;
