import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import AddMusic from './Components/AddMusic/AddMusic';
import './Components/DisplayMusic/DisplayMusic'
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css'



function App(){

  const [music, setMusic] = useState([{ // this hook will hold the data from our axios request showing all of the songs
    id: '',   
    title: '',
    artist: '',
    album: '',
    release_date: '',
    genre: '',
    liked: ''
  }])


  useEffect(() => {
    getAllMusic();
    console.log(music)
  },[])

  const getAllMusic= async()=>{   // this request will retrieve all of the songs from our database
    let response = await axios.get('http://127.0.0.1:8000/music/');  //the URL we are using the same endpoint here that we tested in postman
    setMusic(response.data);
    console.log(response.data) // here we are saving the result in our hook above on line 8

  }

  const filterMusic = (searchTerm) => {
    console.log(searchTerm);
    let matchingMusic = music.filter((music)=> {
      if(music.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          music.artist.toLowerCase().includes(searchTerm.toLowerCase()) || 
          music.album.toLowerCase().includes(searchTerm.toLowerCase()) || 
          music.release_date.toLowerCase().includes(searchTerm.toLowerCase()) || 
          music.genre.toLowerCase().includes(searchTerm.toLowerCase())){
        return true
      }
      else return false
    })
    setMusic(matchingMusic)
    console.log(matchingMusic)
  }


  async function addMusic(newMusic){  // this will send data to our backend to be saved in the Database
    let response = await axios.post ('http://127.0.0.1:8000/music/', newMusic)  // this is same URL tested in postman 
  console.log(response)
  }
  
  return (
    <div className='container-fluid'>
      <h1 style={{margin: '1em'}}>
        Music <small className='text-muted'>Library</small>
        </h1>
        <div className='navbar'>
      <NavBar filterMusic={filterMusic} getAllMusic={getAllMusic} />
      </div>
      <div className='addmusic'>
       <AddMusic addMusic={addMusic}/>  {/* here we will need to pass down our addMusic function */}
       </div>
       <div className='displaymusic'>
       <DisplayMusic parentPost={music}/>
       <div/>
     </div>
     </div>
  );
  }

export default App;