import { Construction } from "@mui/icons-material";
import { Typography, Link } from "@mui/material";


interface ITBDPage {
    page: string
}

export function TBDPage({ page }: ITBDPage) {
    return (
        <div className="center_mid">
            <Construction sx={{fontSize: "5em"}}/>
            <Typography variant="body1">
                This is the { page }
            </Typography>
            <Typography variant="body1">
                This page is currently under construction
            </Typography>
            <Link href="/games">
                Return to game library
            </Link>
        </div>
    );
}
