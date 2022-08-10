import React, { useState } from "react";
import "./AddMusic.css"

const AddMusic = (props) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [release_date, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let newMusic = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    console.log(newMusic);
    props.addMusic(newMusic);
  }
  return (
    <form className='content' onSubmit={handleSubmit}>
      <div>
            <label>Title</label>
             <input type='text' onChange ={(event) => setTitle(event.target.value)} value= {title}/>
      </div>
      <div> 
            <label>Artist</label>
            <input type='text' onChange={(event) => setArtist(event.target.value)} value= {artist}/>
            <label>Album</label>
          
            <input type='text' onChange={(event) => setAlbum(event.target.value)} value= {album}/>
            <label>Release Date</label>
            <input type='date' onChange={(event) => setReleaseDate(event.target.value)} value= {release_date}/>
            <label>Genre</label>
            <input type='text' onChange={(event) => setGenre(event.target.value)} value= {genre}/>           
            <input type="submit" value="Add Post"></input>
        </form>
  );
}


export default AddMusic;