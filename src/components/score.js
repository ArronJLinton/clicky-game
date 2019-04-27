import React from 'react';

function Score(props) {

    return(<span className={props.position}>Score:{props.score} | Top Score:{props.topScore}</span> );
};

export default Score

