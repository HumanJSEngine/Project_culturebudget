import React from 'react';
import BottomNavigation from '../components/common/BottomNavigation';
import Page from '../styles/Page';
import Container from '../styles/Container';
import Header from '../components/Layout/Header';
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

const List = () => {
  const listType = useSelector((state: RootState) => state.setting?.listType);
  const [postList, setPostList] = useState<BudgetData[]>([]);
  const [postData, setPostData] = useState<BudgetData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const getPostList = async () => {
    setIsLoading(true);
    try {
      const res = await getPost();
      setPostList(res.expense);
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
  return (
    <Page>
      <Header />
      <Container>
        {isLoading && <Loading />}
        <>
          {listType === 'default' && (
            <DefaultList list={postList} openPost={openPost} />
          )}
          {listType === 'gallery' && (
            <GalleryList list={postList} openPost={openPost} />
          )}
        </>
      </Container>
      <WriteButton />
      <BottomNavigation />
      <Post postData={postData} closePost={closePost} />
    </Page>
  );
};

export default List;
