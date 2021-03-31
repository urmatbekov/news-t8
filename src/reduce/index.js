import { combineReducers } from 'redux'
import postList from "./postList";
import postDetail from "./postDetail"
import { reducer as formReducer } from "redux-form"

const reduce = combineReducers({
    postList,
    postDetail,
    form: formReducer
})

export default reduce;