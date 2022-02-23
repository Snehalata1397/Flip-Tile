import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import boxes from "./boxes";
import Home from "./components/Home";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));
  return (
    <div>
      <Navbar />
      <Home />
      {squareElements}
    </div>
  );
}

export default App;
