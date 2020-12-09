import React from 'react';

const LibrarySong = ({audioRef, id, song, songs, setCurrentSong, isPlaying}) => {
    
    const songSelectHandler = () => {
        
        setCurrentSong(song);
        songs.map((s) => s.active = (s.id === song.id));

        if(isPlaying) {
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then(
                    (audio) => {
                        audioRef.current.play();
                    }
                )
            }
        }
        audioRef.current.play();
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