import React from "react";
import { createTheme } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";


declare module '@mui/material/styles' {
    // eslint-disable-next-line no-unused-vars
	interface TypographyVariants {
		footer1: React.CSSProperties;
		footer2: React.CSSProperties;
	}

	// allow configuration using `createTheme`
    // eslint-disable-next-line no-unused-vars
	interface TypographyVariantsOptions {
		footer1?: React.CSSProperties;
		footer2?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    // eslint-disable-next-line no-unused-vars
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
					footer2: "p"
				}
			}
		}
	}
});

theme.typography.footer1 = {
	color: "#b7b7b7",
	fontSize: ".9em", 
	[theme.breakpoints.down("md")]: {
		fontSize: ".6em"
	}
};
theme.typography.footer2 = {
	color: "#b7b7b7",
	fontSize: ".7em",
	[theme.breakpoints.down("md")]: {
		fontSize: ".5em"
	}
};
