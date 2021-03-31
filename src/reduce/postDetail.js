import http from "../service/http";

const initialState = {
    data: {}
}

const postDetail = (state = initialState, action) => {

    if(action.type === "UPLOAD_DETAIL") {
        return { ...state, data: action.payload }
    }

    return state
};

const uploadDetail = (data) => {
    return {
        type: "UPLOAD_DETAIL",
        payload: data
    }
}

const getPostDetail = (id) => (dispatch) => {
    http.get(`/news/${id}/`).then((res)=>{
        dispatch(uploadDetail(res.data))
    })
}

export {getPostDetail};

export default postDetail;