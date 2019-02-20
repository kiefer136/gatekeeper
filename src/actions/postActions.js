import * as types from './types';

export const fetchPosts = () => dispatch  => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: types.FETCH_POSTS,
        payload: posts
    }));
}

export const createPost = (postData) => dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: types.NEW_POST,
        payload: post
    }));
}