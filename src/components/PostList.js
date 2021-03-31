import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost } from "../reduce/postList"
import PostItem from "./PostItem"

const PostList = ({ postList, getPost }) => {
    useEffect(() => {
        getPost()
    }, [])
    const { data: { results } } = postList;
    return (
        <div>
            {results.map(
                (post) => <PostItem post={post} key={post.id} />
            )}
        </div>
    );
};

const msp = ({ postList }) => {
    return { postList }
}

export default connect(
    msp, { getPost }
)(PostList);