import React from "react";

const Square = (props) => {
    const handleClick = () => {
        if (!props.squareValue) {
            if (props.player) {
                props.squares.splice(props.index, 1, "X");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            } else {
                props.squares.splice(props.index, 1, "O");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }
        }
    };
    console.log(props.squares, props.player)
    return (
        <div className="square" onClick={handleClick}>
            {props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}
        </div>
    );
};


export default Square;
