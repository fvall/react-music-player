import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({audioRef, songs, setCurrentSong, isPlaying, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(
                    song => <LibrarySong
                        audioRef={audioRef}
                        id={song.id}
                        key={song.id}
                        song={song}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        isPlaying={isPlaying}
                    />
                )}
            </div>
        </div>
    )
}

export default Library;