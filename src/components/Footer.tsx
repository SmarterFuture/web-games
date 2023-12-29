import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import asstes from "../shared/assets.json";
const icons = asstes.icons;


const FooterBox = styled(Box)(({ theme}) => ({
    ...theme.typography.body1,
    marginTop: "10vh",
    paddingTop: "2em",
    paddingBottom: "2em",
    background: theme.palette.background.paper
}));


function Footer() {
    return (
        <FooterBox component={"footer"}>
            <Container>
                <Grid container maxWidth="xl" spacing={1} columns={2}>
                    <Grid item xs={1}>
                        <Typography variant="subtitle1">
                            If you spot any issues, feel free to open an issue on GitHub.
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align="right">
                            <Link href="https://github.com/SmarterFuture">
                                <img className="icon" src= { icons.github } />
                            </Link>
                            <Link href="https://www.buymeacoffee.com/smarterfuture">
                                <img className="icon" src={ icons.buymeacoffee } />
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle2" color="theme.secondary.dark" align="center">
                            { "Copyright © " }
                            <Link color="inherit" href="https://github.com/SmarterFuture/web-games">
                                SmarterFuture GitHub
                            </Link>
                            { " " }
                            { new Date().getFullYear() }
                            { "." }
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </FooterBox>
        );
}

export default Footer;
