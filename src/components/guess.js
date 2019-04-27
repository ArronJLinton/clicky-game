import React from 'react';

function Guess(props) {

    let guess = props.correct ? "You guessed correct!" : "Sorry, you guessed wrong"
    return(<span className={props.position}>{guess}</span> );
};

export default Guess

