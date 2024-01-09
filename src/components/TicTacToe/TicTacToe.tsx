import { useState } from "react";
import { Slider, Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { Scene } from "./Scene";
import { Player } from "./constants";
import {MyDoc} from "../custom";


export function TicTacToe() {
    const [size, setSize] = useState<number>(3);
    const [key, setKey] = useState<boolean>(false);
    const [dialog, setDialog] = useState<Player | null>(null);

    function handleChange(_: Event, newValue: number | number[]) {
        setSize(newValue as number);
        setKey(!key)
    }
    function handleReset() {
        setKey(!key);
    }
    function openDialog(winner: Player) {
        setDialog(winner);
    }
    function closeDialog() {
        setDialog(null)
    }
    
    return (
        <>
        <MyDoc title="Tic Tac Toe" dialogHeading="Tic Tac Toe documentation">
            <ul>
                <li>You can select size of game board with slider</li>
                <li>
                    If you select size 3 or &#8805; 4, your goal is to get 3 or 4 of your symbols in row, 
                    column or in any diagonal
                </li>
                <li>You and your opponent are alternating in placing symbols</li>
                <li>Symbols are being placed simply by clicking on unoccupied square</li>
                <li>In case of victory, winning dialog will be opened</li>
                <li>Game can be revied in history tab, by clicking on corresponding game record</li>
                <li>History will stay unchanged, unless change is made</li>
            </ul>
        </MyDoc>  
            <div className="box">
                <div className="sliderBox"> 
                    <Slider min={3} max={10} onChange={handleChange} valueLabelDisplay="auto" />
                </div>
                <Button variant="contained" onClick={ handleReset }>
                    Reset
                </Button>
                <Scene key={+key} side={size} endHandler={ openDialog }/>
                <Dialog
                    open={ !!dialog }
                    onClose={ closeDialog }
                >
                    <DialogTitle>
                        Congratulations, { dialog } won!
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={ closeDialog }> Close </Button>
                        <Button onClick={() => { closeDialog(); handleReset(); }}> New Game </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

