import { useState } from "react";
import { Scene } from "./Scene";
import {Button, Dialog, DialogActions, DialogTitle, Slider} from "@mui/material";


function Snake() {
    const [speed, setSpeed] =useState<number>(200);
    const [key, setKey] = useState<boolean>(false);
    const [dialog, setDialog] = useState<number | null>(null);

    function handleChange(_: Event, newValue: number | number[]) {
        const newSpeed: number = 210 - (newValue as number) * 10
        setSpeed(newSpeed);
        setKey(!key);
    }

    function handleReset() {
        setKey(!key);
    }

    function openDialog(score: number) {
        setDialog(score);
    }

    function closeDialog() {
        setDialog(null);
    }
    
    return (
        <div className="box">
            <div className="sliderBox">
                <Slider min={1} max={10} onChange={handleChange} valueLabelDisplay="auto" />
            </div>
            <Button variant="contained" className="buttonBox" onClick={ handleReset }>
                Reset
            </Button>
            <Scene key={+key} speed={ speed } endHandler={ openDialog }/>
            <Dialog
                open={ !!dialog }
                onClose={ closeDialog }
            >
                <DialogTitle>
                    Congratulations, you've scored { dialog } points!
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => { closeDialog(); handleReset(); }}> New Game </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Snake;
