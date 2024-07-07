import React, { useState, useRef } from 'react';
import "./SoundPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons"; 

function SoundPlayer({color}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const tracks = [
        {id: 1, title: 'hazaa al balushe sourate al hijr', src: 'src/assets/quran/halhijr.mp3'},
        {id: 2, title: 'hazaa al balushe sourate al kahf', src: 'src/assets/quran/alkahf.mp3'},
        {id: 3, title: 'hazaa al balushe sourate youssef', src: 'src/assets/quran/youssef.mp3'},
        {id: 4, title: 'hazaa al balushe sourate as safaat', src: 'src/assets/quran/assafaat.mp3'},
        {id: 5, title: 'hazaa al balushe sourate ibrahim', src: 'src/assets/quran/ibrahim.mp3'},
        {id: 6, title: 'hazaa al balushe sourate an nahl', src: 'src/assets/quran/annahl.mp3'},
        {id: 7, title: 'hazaa al balushe sourate saba', src: 'src/assets/quran/saba.mp3'},
        {id: 8, title: 'hazaa al balushe sourate al isra', src: 'src/assets/quran/alisra.mp3'},
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