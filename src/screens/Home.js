import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
    return (
        <>
            <h1 className="text-center m-5">New Posts</h1>
            <PostList />
        </>
    );
};

export default Home;