import { AppBar, Toolbar, Container, Box, Typography, Button } from "@mui/material";
import {useNavigate} from "react-router-dom";



interface IPage {
    name: string,
    link: string,
}

const PAGES: Array<IPage> = [
    { name: "Home", link: "" },
    { name: "Games", link: "/games" },
    { name: "Leaderboard", link: "/leaderboard"}
]

function NavBar() {
    const navigate = useNavigate();
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h4" />
                    <Box sx={{flexGrow: 1, display: { xs: "none", md: "flex"}}}>
                        {
                            PAGES.map((page) => (
                            <Button
                                key={page.name}
                                onClick={ () => navigate(page.link) }
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                { page.name }
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;


