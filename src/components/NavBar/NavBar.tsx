import { AppBar, Toolbar, Container, Typography } from "@mui/material";
import { LOGO_STYLE_SMALL, LOGO_STYLE_BIG } from "./constants";
import { AccountOptions } from "./AccountOptions";
import { SmallMenu, BigMenu } from "./MenuList";



export function NavBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* big screen layout */}
                    <Typography variant="h5" noWrap sx={ LOGO_STYLE_BIG }>
                        WEB GAMES
                    </Typography>
                    
                    <BigMenu />

                    { /* small screen layout */ }
                    <SmallMenu />
                    
                    <Typography variant="h5" noWrap sx={ LOGO_STYLE_SMALL }>
                        WEB GAMES
                    </Typography>

                    { /* account setting */ }
                    <AccountOptions />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

