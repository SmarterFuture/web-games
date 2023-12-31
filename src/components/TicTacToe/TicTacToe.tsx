import { useState } from "react";
import { Slider, Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { Scene } from "./Scene";
import { Player } from "./constants";


function TicTacToe() {
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
    )
}

export default TicTacToe;
