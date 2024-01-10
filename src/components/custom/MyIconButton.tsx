import { IconButton, IconButtonProps } from "@mui/material";


export function MyIconButton (props: IconButtonProps) {
    return (
        <IconButton size="large" color="inherit" { ...props }>
            { props.children }
        </IconButton>
    );}
