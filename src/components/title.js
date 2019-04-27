import React from 'react';
import Score from "./score";
import Guess from "./guess";

function Title(props) {

    return (
        <div className={"row"}>
            <div className={"col s12 blue lighten-1"}>
                <div className={"row"}>
                    <div className={"col s12"}>
                    <Score score={0} topScore={5} position={"center"}/>  {/*TODO: score is current score, top is best yet*/}
                    <Guess position={"center"} correct={false}/>  {/*TODO: Correct is a  boolean based on the guess*/}
                    </div>
                </div>
                <div className={"row center"}>
                    <h1>Clicky Game!</h1>
                    <h5>Click on  an image to earn points, but don't click on any more than once!</h5>
                </div>
            </div>
        </div>
    );
};

export default Title

