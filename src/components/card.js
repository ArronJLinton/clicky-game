import React from 'react';

function Card(props) {
    return(<img style={{height:200, width:200, margin:6.5}} {...props}/>);
//    TODO: Add data-clicked to default as false
};

export default Card

