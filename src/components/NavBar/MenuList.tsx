import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar, Box, Typography, Button, Drawer, List, ListItemButton, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { MENU_STYLE_BIG, MENU_STYLE_SMALL, PAGES } from "./shared";
import { IButton } from "./IconButton";


export function SmallMenu() {
    const navigate = useNavigate();
    const [openElm, setOpenElm] = useState<null | HTMLElement>(null);

    function openMenu(event: MouseEvent<HTMLElement>) {
        setOpenElm(event.currentTarget);
    }

    function closeMenu() {
        setOpenElm(null);
    }

    return (
        <Box sx={ MENU_STYLE_SMALL }>
            <IButton func={ openMenu } inner={ <MenuIcon />} />
            <Drawer
                anchor="left"
                open={ Boolean(openElm) } 
                onClose={ closeMenu }
                variant="temporary"
                sx={{
                    boxSizing: 'border-box',
                    width: "10em"
                }}
            >
                <Toolbar />
                <List>
                    { PAGES.map((page) => (
                        <ListItem key={ page.name } disablePadding>
                            <ListItemButton
                                onClick={ () => { closeMenu(); navigate(page.link) }}
                            >
                                <Typography textAlign={"center"}>
                                    { page.name.toUpperCase() }
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export function BigMenu() {
    const navigate = useNavigate();

    return (
        <Box sx={ MENU_STYLE_BIG }>
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
    );
}
