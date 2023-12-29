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
    }
});
