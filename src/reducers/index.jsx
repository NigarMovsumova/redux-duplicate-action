import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer'
import {usersReducer} from './usersReducer'
import {counterReducer} from "./counterReducer";

export default combineReducers({
    posts:postsReducer,
    users:usersReducer,
    counter: counterReducer

});
