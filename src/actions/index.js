import Axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
const ROOT = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=MostafaZahran';

export function FetchPosts () {
    const request = Axios.get(`${ROOT}/posts${API_KEY}`);
    return((dispatch) => {
        request.then((data) => dispatch({type: FETCH_POSTS, payload: data}))
    });
}

export function CreatePost(values, callback){
    const request = Axios.post(`${ROOT}/posts${API_KEY}`, values).then(callback);
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function FetchPost(id){
    const request = Axios.get(`${ROOT}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function DeletePost(id, callback){
    Axios.delete(`${ROOT}/posts/${id}${API_KEY}`).then(callback);
    return {
        type: DELETE_POST,
        payload: id
    }
}