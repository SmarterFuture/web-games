import { Grid, Box } from "@mui/material";
import { MyIconButton } from "../custom";
import { IArrowKey, IControlsHandler, ARROWS, PAUSED } from "./constants";
import { Item, CONROLS_STYLE_SMALL } from "./styles";


export function Controls({ pressHandler, pauseHandler, paused }: IControlsHandler ) {
    const buttons = [];

    for ( let i = 0; i < 9; i++ ) {
        let inner = undefined;

        if ( i % 2 == 1 ) {
            const arrowKey: IArrowKey = ARROWS[ i / 2 | 0 ];
            inner = (
                <MyIconButton onClick={ () => pressHandler(arrowKey.value) }>
                    { arrowKey.icon }
                </MyIconButton>
            )
        } else if ( i === 4 ) {
            inner = (
                <MyIconButton onClick={ () => pauseHandler(elm => !elm) }>
                    { PAUSED[ +paused ] }
                </MyIconButton>
            )
        } 

        buttons.push(
            <Grid item xs={1} key={i} className="mid">
                <Item>{ inner }</Item>
            </Grid>
        )
    }
    
    return (
        <Box sx={ CONROLS_STYLE_SMALL }>
            <Grid container spacing={1} columns={3}>
                { buttons } 
            </Grid>
        </Box>
    );
}
