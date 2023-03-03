import BottomNavigation from '../components/common/BottomNavigation';
import Page from '../styles/Page';
import Container from '../styles/Container';
import Header from '../components/common/Header';
import { useState, useEffect } from 'react';
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
import HeaderButton from '../components/common/HeaderButton';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import moment from 'moment';
import MonthBar from '../components/common/MonthBar';

const List = () => {
  const listType = useSelector((state: RootState) => state.setting?.listType);
  const [postList, setPostList] = useState<BudgetData[]>([]);
  const [postData, setPostData] = useState<BudgetData | null>(null);
  const [month, setMonth] = useState(moment().month() + 1);
  const [year, setYear] = useState(moment().year());
  const [isLoading, setIsLoading] = useState(false);
  const memberNumber = GetMemberNumber();
  const navigate = useNavigate();
  const onWriteHandler = () => {
    navigate('/write');
  };
  const getPostList = async () => {
    setIsLoading(true);
    try {
      const res = await getPost(memberNumber, year, month);
      setPostList(res.list);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPostList();
  }, [year, month]);
  const openPost = (postData: BudgetData) => {
    setPostData(postData);
  };
  const closePost = () => {
    setPostData(null);
  };
  const list = () => {
    if (postList.length === 0) {
      return <NoListItem year={year} month={month} />;
    } else {
      if (listType === 'default') {
        return (
          <DefaultList list={postList} openPost={openPost} month={month} />
        );
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
          <MonthBar
            year={year}
            month={month}
            onChangeYear={setYear}
            onChangeMonth={setMonth}
          />
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
