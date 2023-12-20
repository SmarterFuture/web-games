import React, {MouseEventHandler, useState} from "react";
import Slider from "@mui/material/Slider";
import { validateSudoku } from "./utils";

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
    const [tiles, setTiles] = useState<Array<string>>(Array(side ** 2));
    const [cbs, setCbs] = useState<Array<Array<string>>>(Array());

    function jumpTo(move: number) {
        const nextCbs = cbs.slice(0, move + 1);
        const newState = nextCbs[move];
        setTiles(newState);
        setXNext(!!(move % 2));
        setCbs(nextCbs);
    }

    function playerTurn( index: number ) {
        const nextState = tiles.slice();
        const symbol = xNext ? "X" : "O";
        if (tiles[index] !== undefined) {
            return;
        }
        nextState[index] = symbol;
        setTiles(nextState);
        setXNext(!xNext);
        
        const nextCbs = cbs.slice();
        nextCbs.push(nextState);
        setCbs(nextCbs);


        const out = validateSudoku(nextState, side, Math.max(3, side - 1));
        console.log(out, symbol);
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
        rows.push(<div key={y} className="board-line">{cols}</div>);
    }
    
    let cbbs: Array<React.JSX.Element> = [];
    cbs.forEach((_, i) => {
        cbbs.push(
            <li key={i}>
                <button onClick={() => jumpTo(i)}>
                { !(i % 2) ? "X" : "0" }, move #{i+1} 
                </button>
            </li>
        ); 
    })

    return (
        <div className="tictactoeBox">
            <div>
                {rows}
            </div>
            <div className="historyDiv">
                <ul className="historyList">
                    {cbbs}
                </ul>
            </div>
        </div>
    );
}

export default function TicTacToe() {
    const [size, setSize] = useState<number>(3);
    const [key, setKey] = useState<boolean>(false);

    function handleChange(_: Event, newValue: number | number[]) {
        setSize(newValue as number);
        setKey(!key)
    }
    function handleReset() {
        setKey(!key);
    }
    
    return (
        <div className="box">
            <div className="sliderBox"> 
                <Slider min={3} max={10} onChange={handleChange}/>
            </div>
            <button className="buttonBox" onClick={() => handleReset()}>
                Reset
            </button>
            <Game key={+key} side={size} />
        </div>
    )
}

