import React from 'react';
import FormPost from "../components/Form"
import http from '../service/http';


const CreatePost = () => {

    const submit = (value) => {
        const formData = new FormData()
        formData.append("title",value['title'])
        formData.append("image",value['image'][0])
        formData.append("body",value['body'])
        formData.append("short_body",value['short_body'])

        http.post("/news/",formData).then((res)=>{
            console.log(res)
        })
    }

    return (
        <div className="">
            <h1 className="text-center m-4">Create Post</h1>
            <FormPost onSubmit={submit}/>
        </div>
    );
};

export default CreatePost;