import { useEffect, useState } from "react";

function App() {
  const [time, SetTime] = useState(30);
  const [running, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (running && time > 0) {
      timerId = setInterval(() => {
        SetTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [running, time]);

  const startEvent = () => setIsRunning(true);

  const stopEvent = () => setIsRunning(false);

  const resetEvent = () => {
    setIsRunning(false);
    SetTime(30);
  };

  return (
    <>
      <h2>Count Down</h2>

      <p>Set Time Out</p>

      <input
        type="number"
        value={time}
        onChange={(e) => SetTime(Number(e.target.value))}
      />

      <p>Time Left: {time}</p>

      <button onClick={startEvent} disabled={running}>
        Start
      </button>

      <button onClick={stopEvent} disabled={!running}>
        Stop
      </button>

      <button onClick={resetEvent}>Reset</button>
    </>
  );
}

export default App;