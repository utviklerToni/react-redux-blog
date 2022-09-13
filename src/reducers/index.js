import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
   posts: postsReducer,
   users: usersReducer,
});

// ****************************************************8

// exercise
// select mp3 and display details
// const songsReducer = () => {
//    return [
//       { id: '01', title: 'Chasing Cars', duration: '4:05' },
//       { id: '02', title: 'Just Look At You', duration: '3:07' },
//       { id: '03', title: 'Cells', duration: '3:05' },
//       { id: '04', title: 'Salvation', duration: '3:23' },
//       { id: '05', title: 'Electro Rock', duration: '4:15' },
//       { id: '06', title: 'Bigger Than Us', duration: '4:45' },
//    ];
// };

// const selectedSongReducer = (selectedSong = null, action) => {
//    if (action.type === 'SONG_SELECTED') {
//       return action.payload;
//    }

//    return selectedSong;
// };

// export default combineReducers({
//    songs: songsReducer,
//    selectedSong: selectedSongReducer,
// });
