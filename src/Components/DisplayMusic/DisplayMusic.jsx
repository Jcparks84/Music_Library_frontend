import React, { useState } from 'react';

const DisplayMusic = (props) => {

  return(
      <div classname = 'musiclist'>
      {props.parentPost.map((music, index) => {
      return (
          <div classname = 'musicborder' key = {index}>
              <div><p classname = 'music.title'>{music.title}</p></div>
              <div><p classname = 'music.artist'>{music.artist}</p></div>
              <div><p classname = 'music.album'>{music.album}</p></div>
              <div><p classname = 'music.release_date'>{music.release_date}</p></div>
              <div><p classname = 'music.genre'>{music.genre}</p></div>
          </div>
      )
      })}
      </div>
  );
}


export default DisplayMusic;

  