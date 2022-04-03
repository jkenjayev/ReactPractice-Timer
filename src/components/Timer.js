import React, { useState, useRef } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  /* useRef initial state is null */
  const timerIdRef = useRef(null);

  /* Methods */
  const handleStart = () => {
    setCount(true);
    timerIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    setIsCounting(isCounting)
  }

  return (
    <div className="App">
      <h1>React Timer: {count}</h1>
      {!isCounting ? (
        <button className="success" onClick={handleStart}>
          Start
        </button>
      ) : (
        <button className="danger" onClick={handleStop}>
          Stop
        </button>
      )}
      <button className="secondary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
