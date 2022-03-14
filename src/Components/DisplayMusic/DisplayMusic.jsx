import React, { useState } from 'react';
import '../DisplayMusic'

const DisplayMusic = (props) => {
    return (
      <div className="container">
          <table>
        <thead>
          <tr>
            <th>title</th>
            <th>artist</th>
            <th>album</th>
            <th>release date</th>
            <th>genre</th>
            <th>liked</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
  
      </div>
    );
  };
  
  export default DisplayMusic;

  