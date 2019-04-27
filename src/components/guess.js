import React from 'react';

function Guess(props) {

    let guess = props.correct ? "You guessed correct!" : "Sorry, you guessed wrong"
    return(<p className={props.position}>{guess}</p> );
};

export default Guess

