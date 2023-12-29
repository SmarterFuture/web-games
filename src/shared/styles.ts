import { createTheme } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";
import { styled } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface TypographyVariants {
    footer1: React.CSSProperties;
    footer2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    footer1?: React.CSSProperties;
    footer2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    footer1: true;
    footer2: true;
  }
}

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
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    footer1: "p",
                    footer2: "p",
                }
            }
        }
    }
});

theme.typography.footer1 = {
    color: "#383838",
    fontSize: ".9em", 
    [theme.breakpoints.down("md")]: {
        fontSize: ".6em"
    }
};
theme.typography.footer2 = {
    color: "#383838",
    fontSize: ".7em",
    [theme.breakpoints.down("md")]: {
        fontSize: ".5em"
    }
};

export const SimpleIcon = styled("img")(({ theme }) => ({
    height: `calc( ${ theme.typography.footer1.fontSize } * 2 )`,
    borderRadius: "50%",
    marginLeft: "1em"
}))

