import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import AddMusic from './Components/AddMusic/AddMusic';



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
    console.log(response.data);  // here we are saving the result in our hook above on line 8
  }

  async function addMusic(newMusic){  // this will send data to our backend to be saved in the Database
    let response = await axios.post ('http://127.0.0.1:8000/music/', newMusic)  // this is same URL tested in postman 
  console.log(response)
  }
  
  return (
    <div>
      <NavBar />  
       <AddMusic addMusic={addMusic}/>  {/* here we will need to pass down our addMusic function */}
     
    </div>
  );
  }

export default App;