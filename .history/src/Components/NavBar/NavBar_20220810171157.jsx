import { useState, useEffect } from "react";
import './NavBar.css'

const NavBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        props.filterMusic(searchTerm)
    }

    return (
        <div className="visually-hidden">
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='search by artist...'></input>
            <button type='submit'>search!</button>
            <button onClick={() => props.getAllMusic()}> reset table</button>
            </form>
        </div>
    )
};

export default NavBar;