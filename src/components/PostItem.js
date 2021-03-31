import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser"

const PostItem = ({ post }) => {
    const { title, short_body, image_detail, id } = post;
    const url = "https://nurkadyrnur.pythonanywhere.com"
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-body">
                <img src={url + image_detail} alt={title} />
                <p className="card-text">{ReactHtmlParser(short_body)}</p>
                <Link to={`/post/${id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    );
};

export default PostItem;