import React from 'react';

function Score(props) {

    return(<p className={props.position}>Score:{props.score} | Top Score:{props.topScore}</p> );
};

export default Score

