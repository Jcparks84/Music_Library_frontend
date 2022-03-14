import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(){


const AddMusic = (props) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [release_date, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');

  function handleMusic(event) {
    event.preventDefault();
    let newMusic = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    console.log(newMusic);
    props.createSong(newMusic);
  }

  useEffect(() => {
    getAllMusic();
  }, [])

  async function getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    handleMusic(response.data);
    console.log(response.data);
  }
  
  useEffect(() => {
    createMusic();
  }, [])

  async function createMusic(newMusic){
    let response = await axios.get('http://127.0.0.1:8000/music/', newMusic);
    handleMusic(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getMusicById();
  }, [])

  async function getMusicById(musicData, musicId){
    let response = await axios.get(`http://127.0.0.1:8000/music/${musicId}`, musicData);
    handleMusic(response.data);
    console.log(response.data);
  }}


  return (
  <div>

  </div>
);

}

export default App;
