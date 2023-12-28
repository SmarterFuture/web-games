import { Grid, Box } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp, Pause, PlayArrow } from "@mui/icons-material";
import { SimpleIconButton } from "../SimpleIconButton";
import { Dir, IArrowKey, IControlsHandler } from "./shared";
import { Item, CONROLS_STYLE_SMALL } from "./styles";


const ARROWS: Array<IArrowKey> = [
    { icon: <KeyboardArrowUp />, value: Dir.Up },
    { icon: <KeyboardArrowLeft />, value: Dir.Left },
    { icon: <KeyboardArrowRight />, value: Dir.Right },
    { icon: <KeyboardArrowDown />, value: Dir.Down }
];

const PAUSED = [
    <Pause />,
    <PlayArrow />
]

export function Controls({ pressHandler, pauseHandler, paused }: IControlsHandler ) {
    const buttons = [];

    for ( let i = 0; i < 9; i++ ) {
        let inner = undefined;

        if ( i % 2 == 1 ) {
            const arrowKey: IArrowKey = ARROWS[ i / 2 | 0 ];
            inner = <SimpleIconButton func={ () => pressHandler(arrowKey.value) } inner={ arrowKey.icon }/>
        } else if ( i === 4 ) {
            inner = <SimpleIconButton func={ () => pauseHandler(elm => !elm) } inner={ PAUSED[ +paused ] } />
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
