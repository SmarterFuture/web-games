import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import { SimpleIcon } from "../shared/styles"; 
import asstes from "../shared/assets.json";
const icons = asstes.icons;


const FooterBox = styled(Box)(({ theme }) => ({
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
                <Grid
                    container
                    maxWidth="xl"
                    spacing={1}
                    columns={3}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Grid item xs>
                        <Typography variant="footer1">
                            If you spot any issues, feel free to open an issue on GitHub.
                        </Typography>
                    </Grid>
                    <Grid item xs={"auto"}>
                        <Typography align="right">
                            <Link href="https://github.com/SmarterFuture">
                                <SimpleIcon src= { icons.github } />
                            </Link>
                            <Link href="https://www.buymeacoffee.com/smarterfuture">
                                <SimpleIcon src={ icons.buymeacoffee } />
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} textAlign="center">
                        <Typography variant="footer2">
                            { "Copyright © " }
                            <Link color="inherit" href="https://github.com/SmarterFuture/web-games">
                                SmarterFuture/web-games
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
