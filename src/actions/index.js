import Axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const ROOT = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=MostafaZahran';

export function FetchPosts () {
    const request = Axios.get(`${ROOT}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}