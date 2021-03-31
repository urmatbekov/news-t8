import http from "../service/http";

const initialState = {
    data: {
        count: 0,
        results: []
    },
}


const postList = (state = initialState, action) => {
    if(action.type === "UPLOAD_POSTS") {
        return { ...state, data: action.payload }
    }
    return state
};


const uploadPosts = (data) => {
    return {
        type: "UPLOAD_POSTS",
        payload: data
    }
}

const getPost = () => (dispatch) => {
    http.get("/news/").then((res)=>{
        dispatch(uploadPosts(res.data))
    })
}

export {getPost}

export default postList;