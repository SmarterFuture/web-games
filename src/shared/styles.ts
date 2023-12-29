import { createTheme } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: purple,
        secondary: yellow,
        mode: "dark",
        background: {
            default: "#121212",
            paper: "#292929"
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                enableColorOnDark: true
            }
        }
    },
    typography: {
        subtitle1: {
            fontSize: ".8em"
        },
        subtitle2: {
            fontSize: ".7em"
        }
    }
});
