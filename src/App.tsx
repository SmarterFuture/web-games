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
    const [selected, setSelected] = useState<number>(0);
    const [lock, setLock] = useState<boolean>(false);

    function jumpTo(event: React.ChangeEvent<HTMLSelectElement>) {
        const move: number  = +event.target.value;
        const newState = history[move];
        setTiles(newState.state);
        setXNext(!!(move % 2));
        setSelected(move);
        if ( move + 1 !== history.length ) {
            setLock(false)
        }
        event.target.size = 1;
        event.target.blur();
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
        
        if ( selected !== history.length ) {
            nextHistory = history.slice(0, selected + 1);
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
        setSelected( nextHistory.length - 1);
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
            <option className="historyLog" key={i} value={i}>
                { message }
            </option>
        );
    })

    return (
        <>
            <div className="historyDiv">
                <select
                    className="historyList"
                    value={ selected }
                    onChange={ jumpTo }
                    onFocus={ ( event ) => event.target.size = Math.min(10, history.length) }
                    onBlur ={ ( event ) => event.target.size = 1}
                >
                    {historyButtons}
                </select>
            </div>
            <div>
                {rows}
            </div>
        </>
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

