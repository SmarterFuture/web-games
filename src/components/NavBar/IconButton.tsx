import { MouseEvent } from "react";
import { IconButton } from "@mui/material"

 export interface IIButton {
    func: (event: MouseEvent<HTMLElement>) => void,
    inner: any
}

export function IButton({func, inner}: IIButton ) {
    return (
        <IconButton
            onClick={func}
            size="large"
            color="inherit"
        >
            { inner }
        </IconButton>
    )}
