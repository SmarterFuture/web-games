import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MyLink, MyIcon } from "./custom";
import asstes from "../shared/assets.json";
const icons = asstes.icons;


const FooterBox = styled(Box)(({ theme }) => ({
    ...theme.typography.body1,
    marginTop: "10vh",
    paddingTop: "2em",
    paddingBottom: "2em",
    background: theme.palette.background.paper
}));

export function Footer() {
    return (
        <FooterBox component={"footer"}>
            <Container maxWidth="xl">
                <Grid
                    container
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
                            <MyLink href="https://github.com/SmarterFuture">
                                <MyIcon src= { icons.github } />
                            </MyLink>
                            <MyLink href="https://www.buymeacoffee.com/smarterfuture">
                                <MyIcon src={ icons.buymeacoffee } />
                            </MyLink>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} textAlign="center">
                        <Typography variant="footer2">
                            { "Copyright © " }
                            <MyLink color="inherit" href="https://github.com/SmarterFuture/web-games">
                                SmarterFuture/web-games
                            </MyLink>
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

