import React, { useState, MouseEvent } from "react";
import { AppBar, Toolbar, Container, Box, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";



interface IPage {
    name: string,
    link: string,
}

interface IIButton {
    func: (event: MouseEvent<HTMLElement>) => void,
    inner: any
}

const DISPLAY_BIG = {
    display: { xs: "none", md: "flex" },
};

const DISPLAY_SMALL = {
    display: { xs: "flex", md: "none" },
};

const LOGO_STYLE = (display?: { display: any }) => ({
    mr: 3,
    letterSpacing: ".1em",
    textDecoration: "none",
    ...display
});

const MENU_STYLE = (display?: { display: any }) => ({
    flexGrow: 1,
    ...display
});

const PAGES: Array<IPage> = [
    { name: "Home", link: "" },
    { name: "Games", link: "/games" },
    { name: "Leaderboard", link: "/leaderboard" }
]

const USER_PAGES: Array<IPage> = [
    { name: "Profil", link: "/user"},
    { name: "My Account", link: "/user/myaccount" }
]

function IButton({func, inner}: IIButton ) {
    return (
        <IconButton
            onClick={func}
            size="large"
            color="inherit"
        >
            { inner }
        </IconButton>
    )}

function NavBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [accElNav, setAccElNav] = useState<null | HTMLElement>(null);

    function openMenu(event: MouseEvent<HTMLElement>) {
        setAnchorElNav(event.currentTarget);
    }

    function openAccSettings(event: MouseEvent<HTMLElement>) {
        setAccElNav(event.currentTarget);
    }

    function closeMenu() {
        setAnchorElNav(null);
    }

    function closeAccSetting() {
        setAccElNav(null);
    }
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* big screen layout */}
                    <Typography variant="h6" noWrap sx={ LOGO_STYLE(DISPLAY_BIG) }>
                        WEB GAMES
                    </Typography>
                    <Box sx={ MENU_STYLE(DISPLAY_BIG) }>
                        {
                            PAGES.map((page) => (
                            <Button
                                key={page.name}
                                onClick={ () => navigate(page.link) }
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Typography text-align="center">
                                    { page.name }
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    { /* small screen layout */ }
                    <Box sx={ MENU_STYLE(DISPLAY_SMALL) }>
                        <IButton func={ openMenu } inner={ <MenuIcon />} />
                        <Menu
                            anchorEl={ anchorElNav }
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={closeMenu}
                        >
                            { PAGES.map((page) => (
                                <MenuItem
                                    key={ page.name }
                                    onClick={ () => { closeMenu(); navigate(page.link) }}
                                >
                                    <Typography textAlign={"center"}>
                                        { page.name }
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography variant="h5" noWrap sx={{ ...LOGO_STYLE(DISPLAY_SMALL), flexGrow: 1 }}>
                        WEB GAMES
                    </Typography>
                    <Box sx={{flexGrow: 0}}>
                        <IButton func={ openAccSettings } inner={ <AccountCircle/> } />
                        <Menu
                            anchorEl={accElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            open={ Boolean(accElNav) }
                            onClose={ closeAccSetting }
                        >
                            { USER_PAGES.map((page) => (
                                <MenuItem
                                    key={ page.name }
                                    onClick={ () => { closeAccSetting(); navigate(page.link) }}
                                >
                                    <Typography textAlign={"center"}>
                                        { page.name }
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;


