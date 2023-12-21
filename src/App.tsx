import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { validateTicTacToe } from "./utils";
import { ITile, Player, History } from "./constants";


interface Size {
    side: number
}

function Tile({ value, onClick }: ITile) {
    return (
        <button className="square" onClick={ onClick }>
            { value }
        </button>
    );
}

function Game({ side }: Size) {
    
    const [xNext, setXNext] = useState<boolean>(true);
    const [tiles, setTiles] = useState<Array<Player | undefined>>(Array(side ** 2));
    const [history, setHistory] = useState<Array<History>>(Array());
    const [wasMod, setWasMod] = useState<number>(-1);
    const [lock, setLock] = useState<boolean>(false);

    function jumpTo(move: number) {
        const newState = history[move];
        setTiles(newState.state);
        setXNext(!!(move % 2));
        setWasMod(move);
        if ( move + 1 !== history.length ) {
            setLock(false)
        }
    }

    function playerTurn( index: number ) {
        if ( lock ) {
            return;
        }

        const nextState: Array<Player | undefined> = tiles.slice();
        const symbol: Player = xNext ? Player.X : Player.O;

        if (tiles[index] !== undefined) {
            return;
        }
        nextState[index] = symbol;
        setTiles(nextState);
        setXNext(!xNext);
        
        let nextHistory: Array<History> = history.slice();

        if ( wasMod !== -1 ) {
            nextHistory = history.slice(0, wasMod + 1);
            setWasMod(-1);
        }

        const out = validateTicTacToe(nextState, side, Math.max(3, side - 1));
        setLock(out);

        const historyLog: History = {
            state: nextState,
            player: symbol,
            pos: {
                x: index % side,
                y: index / side | 0
            },
            end: out
        }

        nextHistory.push(historyLog);
        setHistory(nextHistory);
    }

    let rows: Array<React.JSX.Element> = [];
    for (let y = 0; y < side; y++) {
        let cols: Array<React.JSX.Element> = [];
        for (let x = 0; x < side; x++) {
            const pos = y * side + x
            cols.push(
                <Tile key={x} value={ tiles[pos] || "" } onClick={() => playerTurn(pos)}/>
            );
        }
        rows.push(<div key={y} className="board-line">{cols}</div>);
    }
    
    let historyButtons: Array<React.JSX.Element> = [];
    history.forEach((e, i) => {
        let message: string;
        if ( e.end ) {
            message = `${ e.player } won`
        } else {
            message = `${ i + 1 }. ${ e.player }${ "abcdefghij"[e.pos.x] }${ e.pos.y + 1 }`
        }

        historyButtons.push(
            <li key={i}>
                <button onClick={() => jumpTo(i)}>
                { message }
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
                    {historyButtons}
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

