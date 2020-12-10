import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';
import {playAudio} from '../util';

const Player = ({audioRef, currentSong, setCurrentSong, songs, isPlaying, setIsPlaying}) => {

    const playSongHandler = () => {
        if (isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        const pct = Math.round(100 * (current / duration));
        setSongInfo({currentTime : current, duration : duration, pct: pct})
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime : e.target.value});
    }

    const skipTrackHandler = async (direction) => {
        
        let idx = songs.findIndex((s) => s.id === currentSong.id);
        let next = (direction === "skip-forward") ? 1 : -1;
        idx = (idx + next) % songs.length;
        if (idx < 0){
            idx += songs.length;
        }

        currentSong.active = false;
        songs[idx].active  = true;
        await setCurrentSong(songs[idx]);
        playAudio(isPlaying, audioRef);

    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const [songInfo, setSongInfo] = useState({
        currentTime : 0,
        duration : 0,
        pct: 0
    });

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div 
                    style={
                        {background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}
                    }
                    className="track"
                >
                    <input 
                        onChange={dragHandler}
                        min={0}
                        max={(songInfo.duration || 0)}
                        value={songInfo.currentTime}
                        type="range"
                    />
                    <div className="animate-track" style={{transform: `translateX(${songInfo.pct}%)`}}></div>
                </div>
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" onClick={() => skipTrackHandler('skip-back')} icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
                <FontAwesomeIcon className="skip-forward" onClick={() => skipTrackHandler('skip-forward')} icon={faAngleRight} size="2x" />
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={() => skipTrackHandler('skip-forward')}
            ></audio>
        </div>
    )
}

export default Player;