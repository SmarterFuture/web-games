import { useState } from "react";
import { ITile, Size, Player, History, MenuProps } from "./shared";
import { validateTicTacToe } from "./utils";
import { SelectChangeEvent, MenuItem, FormControl, InputLabel, Select } from "@mui/material";


function Tile({ value, onClick }: ITile) {
    return (
        <button onClick={ onClick }>
            { value }
        </button>
    );
}

export function Scene({ side, endHandler }: Size) {
    
    const [xNext, setXNext] = useState<boolean>(true);
    const [tiles, setTiles] = useState<Array<Player | undefined>>(Array(side ** 2));
    const [history, setHistory] = useState<Array<History>>(Array());
    const [selected, setSelected] = useState<number>(0);
    const [lock, setLock] = useState<boolean>(false);

    function jumpTo(event: SelectChangeEvent) {
        const move: number  = +event.target.value;
        const newState = history[move];
        setTiles(newState.state);
        setXNext(!!(move % 2));
        setSelected(move);
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
        
        if ( selected !== history.length ) {
            nextHistory = history.slice(0, selected + 1);
        }

        const out = validateTicTacToe(nextState, side, Math.max(3, side - 1));
        setLock(out);
        if ( out ) {
            endHandler(symbol);
        }

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
        rows.push(<div key={y} style={{fontSize: `calc(max(20cqw, 12em) / ${side})`}}>{cols}</div>); 
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
            <MenuItem className="historyLog" key={i} value={i}>
                { message }
            </MenuItem>
        );
    })

    return (
        <>
            <div className="board">
                {rows}
            </div>
            <div className="historyList">
                <FormControl id="history-select">
                    <InputLabel id="history-in">History</InputLabel>
                    <Select
                        className="historyList"
                        labelId="history-in"
                        label="History"
                        value={ !!historyButtons.length ? selected.toString() : '' }
                        onChange={ jumpTo }
                        MenuProps={ MenuProps }
                    >
                        { historyButtons }
                    </Select>
                </FormControl>
            </div>
        </>
    );
}
