import React, {Component} from 'react';
import Card from "./card";
import Score from "./score";
import Guess from "./guess";

class Board extends Component {

    randomize = (arr) => {
        for (let i = arr.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i+1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    };

    updateCards = (url) => {
        let cards = this.state.cards.map(x=>x);
        for (let i = 0; i < cards.length; i++) {
            console.log(url)
            console.log(cards[i].src)
            if(url === cards[i].src) {
                console.log(cards[i])
                cards[i].clicked = true
                console.log(cards[i])
            }
        }
        let score = this.state.score + 1
        let topScore = this.state.topScore
        if (score > this.state.topScore) {
            topScore = score
        }
        this.randomize(cards)
        this.setState({
            score: score,
            cards: cards,
            topScore: topScore
        })
    }

    handleChoice= (event) => {
        console.log(event.target.dataset.clicked)
        if(event.target.dataset.clicked === "false") {
            this.updateCards(event.target.src)
        //    TODO: Play the game
        } else {
        //    TODO: Start a new instance of the game
        }
    }

    randomizeImages = () => {
        let images = [
            {src: "https://i.pinimg.com/564x/b2/71/a4/b271a401ea2305f35604581ee1f09dd6--rick-y-morty-rick-and-morty-portal.jpg", clicked:false},
            {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5FtQvvaalMjwwPs7aroO2N-Umq_dQoW6MpkIu6-n8Nh9rLIu", clicked:false},
            {src: "https://images-na.ssl-images-amazon.com/images/I/61mv11Bd6vL.jpg", clicked:false},
            {src: "https://images-na.ssl-images-amazon.com/images/I/81cXzPwn2qL.jpg", clicked:false},
            {src: "https://colinsreview.files.wordpress.com/2017/12/rick-and-morty-the-ricks-must-be-crazy-square.jpg?w=720", clicked:false},
            {src: "https://target.scene7.com/is/image/Target/GUEST_00aadfd4-45f4-4363-8044-874912610773?wid=488&hei=488&fmt=pjpeg", clicked:false},
            {src: "https://spotlight.radiopublic.com/images/thumbnail?url=https%3A%2F%2Fmedia.podiant.co%2Fspoke%2Fcinescapemagazine%2Fartwork%2F5a22f6c59ae04.jpg", clicked:false}
        ];
        this.randomize(images);
        return images
    };

    state ={
        cards: this.randomizeImages(),
        score: 0,
        topScore: 0
    };

    render() {
    return (
        <div>
            <div className={"row"}>
                <div className={"col s12"}>
                    <Score score={this.state.score} topScore={this.state.topScore} position={"center"}/>  {/*TODO: score is current score, top is best yet*/}
                    <Guess position={"center"} correct={false}/>  {/*TODO: Correct is a  boolean based on the guess*/}
                </div>
            </div>
            <div className="row">

                <div className="col">
                    {this.state.cards.map((card, i) => <Card src={card.src} data-clicked={card.clicked} key={i} onClick={this.handleChoice}/>)}
                </div>
            </div>
        </div>
    )};
}

export default Board

