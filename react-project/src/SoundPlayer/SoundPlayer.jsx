import React, { useState, useRef } from 'react';
import "./SoundPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons"; 

function SoundPlayer({color}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const tracks = [
        {id: 1, title: 'sound1', src: 'src/assets/playlist/sound1.mp3'},
    ];

    const handlePlayTrack = (trackSrc) => {
        audioRef.current.src = trackSrc;
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePauseTrack = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    return (
        <div className="sound-player">
            <audio ref={audioRef} src={tracks[0].src} controls></audio>
            <div className="track-list">
                {tracks.map(track => (
                    <div key={track.id} className="track-item" style={{backgroundColor: color}}>
                        <p>{track.title}</p>
                        <button onClick={() => handlePlayTrack(track.src)}><FontAwesomeIcon icon={faPlay}/></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SoundPlayer