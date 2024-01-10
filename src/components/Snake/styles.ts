import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


export const Canvas = styled('canvas')(
    ({ theme }) => ({
        marginTop: ".5em",
        minWidth: "20em",
        maxWidth: "60vh",
        width: "60%",
        aspectRatio: "1 / 1",
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: theme.palette.secondary.dark
}));

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

export const CONROLS_STYLE_SMALL = {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    height: "10em",
    aspectRatio: "1 / 1",
    mt: "1em"
};

