import React, {Component} from 'react';
import Card from "./card";

class Board extends Component {

    randomize = (arr) => {
        for (let i = arr.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i+1));
            let temp = arr[i]
            arr[i] = arr[j];
            arr[j] = temp;
        }
    };

    updateCards = () => {
        let images = [
            "https://i.pinimg.com/564x/b2/71/a4/b271a401ea2305f35604581ee1f09dd6--rick-y-morty-rick-and-morty-portal.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5FtQvvaalMjwwPs7aroO2N-Umq_dQoW6MpkIu6-n8Nh9rLIu",
            "https://images-na.ssl-images-amazon.com/images/I/61mv11Bd6vL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81cXzPwn2qL.jpg",
            "https://colinsreview.files.wordpress.com/2017/12/rick-and-morty-the-ricks-must-be-crazy-square.jpg?w=720",
            "https://target.scene7.com/is/image/Target/GUEST_00aadfd4-45f4-4363-8044-874912610773?wid=488&hei=488&fmt=pjpeg",
            "https://spotlight.radiopublic.com/images/thumbnail?url=https%3A%2F%2Fmedia.podiant.co%2Fspoke%2Fcinescapemagazine%2Fartwork%2F5a22f6c59ae04.jpg"
        ]
        this.randomize(images);
        return images.map(card => <Card src={card} name={"Rick and Morty"}/>);
    }

    state ={
        cards: this.updateCards()
    };

    render() {
    return (
        <div className="row">
            <div className="col">
                {this.state.cards}
            </div>
        </div>
    )};
};

export default Board

