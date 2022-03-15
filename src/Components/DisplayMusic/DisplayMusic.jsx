import React, { useState } from 'react';

const DisplayMusic = (props) => {

  return(
      <div className = 'musiclist'>
      {props.parentPost.map((music, index) => {
      return (
          <div className = 'musicborder' key = {index}>
              <div><p className = 'music.title'>{music.title}</p></div>
              <div><p className = 'music.artist'>{music.artist}</p></div>
              <div><p className = 'music.album'>{music.album}</p></div>
              <div><p className = 'music.release_date'>{music.release_date}</p></div>
              <div><p className = 'music.genre'>{music.genre}</p></div>
          </div>
      )
      })}
      </div>
  );
}


export default DisplayMusic;

  