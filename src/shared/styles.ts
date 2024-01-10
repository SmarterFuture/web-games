import React from "react";
import { createTheme } from "@mui/material";


declare module '@mui/material/styles' {
	interface TypographyVariants {
		footer1: React.CSSProperties;
		footer2: React.CSSProperties;
        about: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		footer1?: React.CSSProperties;
		footer2?: React.CSSProperties;
        about?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		footer1: true;
		footer2: true;
        about: true;
	}
}

export const theme = createTheme({
	palette: {
		primary: { 
            main: "#A91079"
        },
		secondary: { 
            main: "#383838"
        },
		mode: "dark",
		background: {
			default: "#121212",
			paper: "#202020"
		}
	},
    typography: {
        about: {
            color: "#fff",
            lineHeight: "2em"
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
                    about: "p"
				}
			}
		},
        MuiButton: {
            styleOverrides: {
                root: ({ownerState}) => ({
                    ...(ownerState.variant === "text" 
                        && ownerState.color === "primary" 
                        && { 
                            color: "#E742A0"
                        })
                })
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#383838",
                    backgroundImage: "none"
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "#E742A0"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: "#603354"
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontWeight: "bold"
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

