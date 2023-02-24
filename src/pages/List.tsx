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

const List = () => {
    const setting = useSelector((state) => state.setting);
    const { listType } = setting;
    const [postList, setPostList] = useState([]);
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

    return (
        <Page>
            <Header />
            <Container>
                {listType === 'default' && <DefaultList list={postList} />}
                {listType === 'gallery' && <GalleryList list={postList} />}
            </Container>
            <WriteButton />
            <BottomNavigation />
        </Page>
    );
};

export default List;
