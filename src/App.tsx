import React, {MouseEventHandler, useState} from "react";
import Slider from '@mui/material/Slider';

interface Button {
    value: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

interface Size {
    side: number
}


export function Square({value, onClick}: Button) {

    return (
        <button className="square" onClick={onClick}>
            { value }
        </button>
    );
}

export function Game({side}: Size) {
    
    const [xNext, setXNext] = useState<boolean>(true);
    const [tiles, setTiles] = useState<Array<string>>(Array(side ^ 2).fill(""));

    function playerTurn( index: number ) {
        const nextState = tiles.slice();
        const symbol = xNext ? "X" : "O";
        nextState[index] = symbol;
        setTiles(nextState);
        setXNext(!xNext);
    }

    let rows: Array<React.JSX.Element> = [];
    for (let y = 0; y < side; y++) {
        let cols: Array<React.JSX.Element> = [];
        for (let x = 0; x < side; x++) {
            const pos = y * side + x
            cols.push(
                <Square key={x} value={tiles[pos]} onClick={() => playerTurn(pos)}/>
            );
        }
        rows.push(<div key={y} className="board-row">{cols}</div>);
    } 
    return (
        <>
            {rows}
        </>
    );
}

export default function Frame() {
    const [size, setSize] = useState<number>(3);
    function handleChange(_: Event, newValue: number | number[]) {
        setSize(newValue as number);
    }
    
    return (
        <>
            <Slider min={3} max={10} onChange={handleChange}/>
            <Game key={size} side={size} />
        </>
    )
}

