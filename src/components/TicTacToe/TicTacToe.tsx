import { useState } from "react";
import { Slider, Button } from "@mui/material";
import { Scene } from "./Scene";


function TicTacToe() {
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
                <Slider min={3} max={10} onChange={handleChange} valueLabelDisplay="auto" />
            </div>
            <Button variant="contained" className="buttonBox" onClick={() => handleReset()}>
                Reset
            </Button>
            <Scene key={+key} side={size} />
        </div>
    )
}

export default TicTacToe;
