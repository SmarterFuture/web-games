import { createTheme } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: purple,
        secondary: yellow,
        mode: "dark",
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                enableColorOnDark: true
            }
        }
    }
});
