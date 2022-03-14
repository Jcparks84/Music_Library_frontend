import React, { useState } from "react";
import "./AddSong.css";
import "@fontsource/roboto";
import "@material-ui/core";
import { TextField, Grid, Button } from "@material-ui/core";

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
  }
  return (
  );

export default AddMusic;