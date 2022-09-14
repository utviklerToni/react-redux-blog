// action creator

import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());

   // const userIds = _.uniq(_.map(getState().posts, 'userId'));
   // userIds.forEach((id) => dispatch(fetchUser(id)));

   // refactoring the above lines
   _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
};

export const fetchPosts = () => async (dispatch) => {
   const response = await jsonPlaceholder.get('/posts');

   dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
   // indicating this is a private function,
   const response = await jsonPlaceholder.get(`/users/${id}`);

   dispatch({ type: 'FETCH_USER', payload: response.data });
};

// reference for memoize version
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// // indicating this is a private function,
// const _fetchUser = _.memoize(async (id, dispatch) => {
//    const response = await jsonPlaceholder.get(`/users/${id}`);

//    dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// using named export here rather than default ones
// export const selectSong = (song) => {
//    // return an action
//    return {
//       type: 'SONG_SELECTED',
//       payload: song,
//    };
// };
