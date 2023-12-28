import { MouseEvent } from "react";
import { IconButton } from "@mui/material"

 export interface ISimpleIconButton {
    func: (event: MouseEvent<HTMLElement>) => void,
    inner: any
}

export function SimpleIconButton ({func, inner}: ISimpleIconButton ) {
    return (
        <IconButton
            onClick={func}
            size="large"
            color="inherit"
        >
            { inner }
        </IconButton>
    )}
