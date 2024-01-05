import { useState } from "react";
import { Scene } from "./Scene";
import {Button, Dialog, DialogActions, DialogTitle, Slider} from "@mui/material";
import {MyDoc} from "../custom";


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
        <>
            <MyDoc title="Snake" dialogHeading="Snake game documentation">
                <ul>
                    <li>To start or pause game click on play button or simple press <code>p</code></li>
                    <li>
                        To navigate click any of the given arrow buttons or press <code>
                            ArrowUp / ArrowLeft / ArrowDown / ArrowRight </code>
                        or simply <code>w / a / s / d</code> on your keyboard
                    </li>
                    <li>Goal of this game is to get your snake to be as long as possible</li>
                    <li>Snake is growing by eating apples randomly placed on the game board</li>
                </ul>
            </MyDoc>
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
        </>
    );
}

export default Snake;
