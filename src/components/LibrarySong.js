import React from 'react';
import {playAudio} from '../util';

const LibrarySong = ({audioRef, id, song, songs, setCurrentSong, isPlaying}) => {
    
    const songSelectHandler = () => {     
        setCurrentSong(song);
        songs.map((s) => s.active = (s.id === song.id));
        playAudio(isPlaying, audioRef);
    }
    
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt="cover"></img>
            <div className="song-description">    
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;