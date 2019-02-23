import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async  dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response});
}

export const fetchUsers= ()=> async dispatch =>{
    const response= await jsonPlaceHolder.get('/users');
    dispatch({type:'FETCH_USERS', payload: response});
}
