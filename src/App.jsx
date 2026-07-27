import { useEffect, useState } from "react";

function App() {
  const [mouseMove, setMouseMove] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    
    const handleMouse = (event) => {
      setMouseMove({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };

  }, []);

  return (
    <>
      <h2>Mouse Effect</h2>

      <p>X :: Position: {mouseMove.x}</p>
      <p>Y ::  Position: {mouseMove.y}</p>
    </>
  );
}

export default App;