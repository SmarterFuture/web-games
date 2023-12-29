import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { SimpleIconButton } from "../SimpleIconButton";
import { USER_PAGES } from "./shared";


export function AccountOptions() {
    const navigate = useNavigate();
    const [accNav, setAccNav] = useState<null | HTMLElement>(null);

    function openAccSettings(event: MouseEvent<HTMLElement>) {
        setAccNav(event.currentTarget);
    }

    function closeAccSetting() {
        setAccNav(null);
    }

    return (
        <Box sx={{flexGrow: 0}}>
            <SimpleIconButton func={ openAccSettings } inner={ <AccountCircle/> } />
            <Menu
                anchorEl={accNav}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                open={ Boolean(accNav) }
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
    );
}
