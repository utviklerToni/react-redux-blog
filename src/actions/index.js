// action creator

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
   const response = await jsonPlaceholder.get('/posts');

   dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
   const response = await jsonPlaceholder.get(`/users/${id}`);

   dispatch({
      type: 'FETCH_USER',
      payload: response.data,
   });
};

// using named export here rather than default ones
// export const selectSong = (song) => {
//    // return an action
//    return {
//       type: 'SONG_SELECTED',
//       payload: song,
//    };
// };
