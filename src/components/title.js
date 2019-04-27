import React from 'react';
import Score from "./score";
import Guess from "./guess";

function Title(props) {

    return (
        <div className={"row"}>
            <div className={"col s12 blue lighten-1"}>
                <div className={"row"}>
                    <Guess position={"center"} correct={false}/> // TODO: Correct is a  boolean based on the guess
                    <Score score={0} topScore={5} position={"right"}/> // TODO: score is current score, top is best yet
                </div>
                <div className={"row center"}>
                    <h1>Clicky Game!</h1>
                    <h5>Click on  an image to earn points, but don't click on any more than once!</h5>
                </div>
                <p className={"center"}>I'm a test!</p>
            </div>
        </div>
    );
};

export default Title

