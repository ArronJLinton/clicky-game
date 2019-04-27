import React from 'react';
import './App.css';
import Title from "./components/title";
import Board from "./components/board";

function App() {
  return (
    <div className={"container"}>
        <Title/>
        <Board/>
    </div>
  );
}

export default App;
