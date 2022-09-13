import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {
   return (
      <ul>
         {props.songs.map((song) => (
            <li key={song.id} className='songBox'>
               {song.title}

               <button
                  className='btn btnSpace'
                  onClick={() => props.selectSong(song)}
               >
                  Select
               </button>
            </li>
         ))}
      </ul>
   );
};

// state below reps all the data inside the redux store
const mapStateToProps = (state) => {
   return {
      songs: state.songs,
   };
};

export default connect(mapStateToProps, { selectSong })(SongList);
