import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import {getPostDetail} from "../reduce/postDetail"
import ReactHtmlParser from "react-html-parser"


const PostDetail = ({getPostDetail,postDetail}) => {
    const {id} = useParams()
    useEffect(()=>{
        getPostDetail(id)
    },[id])

    const {image_detail,title,body} = postDetail.data
    const url = "https://nurkadyrnur.pythonanywhere.com"
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-body">
                <img src={url + image_detail} alt={title} />
                <p className="card-text">{ReactHtmlParser(body)}</p>
            </div>
        </div>
    );
};

const msp = ({postDetail}) => {
    return {postDetail}
}

export default connect(
    msp,{getPostDetail}
)(PostDetail);