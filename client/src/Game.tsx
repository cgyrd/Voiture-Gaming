import { Stage, Layer } from "react-konva";
import Car from "./Car.tsx";
import { useState, useEffect } from "react";

const Game = () => {
  const [carPosition, setCarPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setCarPosition((pos) => ({ ...pos, y: pos.y - 10 }));
          break;
        case "ArrowDown":
          setCarPosition((pos) => ({ ...pos, y: pos.y + 10 }));
          break;
        case "ArrowLeft":
          setCarPosition((pos) => ({ ...pos, x: pos.x - 10 }));
          break;
        case "ArrowRight":
          setCarPosition((pos) => ({ ...pos, x: pos.x + 10 }));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Car
          x={carPosition.x}
          y={carPosition.y}
          width={150}
          height={100}
          imageUrl="./images/redcar.png"
        />
      </Layer>
    </Stage>
  );
};

export default Game;
