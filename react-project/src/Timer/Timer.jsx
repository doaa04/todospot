import React, {useState, useEffect, useRef} from "react"
import "./Timer.css";

function Timer({color}) {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let totalMilliseconds = elapsedTime;
        let hours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
        totalMilliseconds %= 1000 * 60 * 60;
        let minutes = Math.floor(totalMilliseconds / (1000 * 60));
        totalMilliseconds %= 1000 * 60;
        let seconds = Math.floor(totalMilliseconds / 1000);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className="timer">
            <div className="display" style={{color: color}}>
                {formatTime()}
            </div>
            <div className="controls">
                <button className="start-button" onClick={start}>▶️</button>
                <button className="stop-button" onClick={stop}>⏯️</button>
                <button className="reset-button" onClick={reset}>⏹️</button>
            </div>
        </div>
    );
}


export default Timer