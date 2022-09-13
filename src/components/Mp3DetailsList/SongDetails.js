import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ selectedSongDetail }) => {
   if (!selectedSongDetail) {
      return <div>No song selected yet. Maybe Select one to continue!</div>;
   }

   return (
      <div>
         <h1>Details for : </h1>
         <h3>Title: {selectedSongDetail.title}</h3>
         <h4>Duration: {selectedSongDetail.duration}</h4>
      </div>
   );
};

const mapStateToProps = (state) => {
   return { selectedSongDetail: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
