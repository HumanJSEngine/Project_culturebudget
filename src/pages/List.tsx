import React from 'react';
import BottomNavigation from '../components/common/BottomNavigation';
import Page from '../styles/Page';
import Container from '../styles/Container';
import Header from '../components/common/Header';
import WriteButton from '../components/common/WriteButton';
import { useEffect } from 'react';
import { useState } from 'react';
import { getPost } from '../api/postApi';
import { useSelector } from 'react-redux';
import DefaultList from '../components/list/DefaultList';
import GalleryList from '../components/list/GalleryList';
import { RootState } from '../store/store';
import Loading from '../components/common/Loading';
import { BudgetData } from '../types/Budget';
import Post from './Post';
import GetMemberNumber from '../utils/GetMemberNumber';
import NoListItem from '../components/list/NoListItem';
import Monthwrapper from '../components/Layout/Monthwrapper';
import HeaderBackButton from '../components/ui/HeaderBackButton';
import { Month } from '../components/Layout/Header';
import HeaderFrontButton from '../components/ui/HeaderFrontButton';
import HeaderButton from '../components/common/HeaderButton';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router';

const List = () => {
  const listType = useSelector((state: RootState) => state.setting?.listType);
  const [postList, setPostList] = useState<BudgetData[]>([]);
  const [postData, setPostData] = useState<BudgetData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const memberNumber = GetMemberNumber();
  const navigate = useNavigate();
  const onWriteHandler = () => {
    navigate('/write');
  };
  const getPostList = async () => {
    setIsLoading(true);
    try {
      const res = await getPost(memberNumber);
      const { currentPage, list, total, totalPage } = res;
      setPostList(list);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPostList();
  }, []);
  const openPost = (postData: BudgetData) => {
    setPostData(postData);
  };
  const closePost = () => {
    setPostData(null);
  };
  const list = () => {
    if (postList.length === 0) {
      return <NoListItem onWriteHandler={onWriteHandler} />;
    } else {
      if (listType === 'default') {
        return <DefaultList list={postList} openPost={openPost} />;
      }
      if (listType === 'gallery') {
        return <GalleryList list={postList} openPost={openPost} />;
      }
    }
  };
  return (
    <Page>
      <Header
        HeaderLeft={
          <Monthwrapper>
            <HeaderBackButton />
            <Month>2월</Month>
            <HeaderFrontButton />
          </Monthwrapper>
        }
        HeaderRight={
          <HeaderButton onClick={onWriteHandler}>
            <AiOutlinePlus size={20} />
          </HeaderButton>
        }
      />
      <Container>
        {isLoading && <Loading />}
        <>{list()}</>
      </Container>
      <BottomNavigation />
      <Post postData={postData} closePost={closePost} />
    </Page>
  );
};

export default List;
