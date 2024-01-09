import { BrowserNotSupported } from "@mui/icons-material";
import { Typography, Link} from "@mui/material";


export function NoPage() {
    return (
        <div className="center_mid">
            <BrowserNotSupported sx={{fontSize: "5em"}}/>
            <Typography variant="body1">
                This page does not exist
            </Typography>
            <Link href="/">
                Return home
            </Link>
        </div>
    );
}

