import React, { useState, useEffect } from "react";
import "./style.css";

function Stopwatch() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [stop, setStop] = useState(false);

  const getstop = () => {
    setStop(!stop);
  };

  const getStopWatchTime = () => {
    if (second === 59 || second > 59) {
      setMinute(minute + 1);
      setSecond(0);
    }
    if (minute === 59 || minute > 59) {
      setHour(hour + 1);
      setMinute(0);
    }
  };
  // var timer;
  useEffect(() => {
    let timer;
    if (stop === false) {
      timer = setTimeout(() => {
        setSecond(second + 1);
        getStopWatchTime();
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });
  const resetTime = () => {
    setHour(0);
    setSecond(0);
    setMinute(0);
  };

  return (
    <>
      <span>{hour < 10 ? "0" + hour : hour}</span>
      <span>{minute < 10 ? "0" + minute : minute}</span>
      <span>{second < 10 ? "0" + second : second}</span>
      <div>
        <button onClick={getstop}>{stop ? "Resume" : "Stop"} </button>
        <button onClick={resetTime}>Reset</button>
      </div>
    </>
  );
}
export default Stopwatch;
