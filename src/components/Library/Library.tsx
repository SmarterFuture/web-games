import { ImageButton, ImageSrc, ImageCenter, ImageBackdrop } from "./styles";
import { GAMES, IGameBook } from "./constants";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";


function Tile({link, name, pic}: IGameBook) {
    const navigate = useNavigate();

    return (
        <ImageButton
            focusRipple
            key={name}
            style={{
                width: "100%"
            }}
            onClick={() => navigate(link) }
        >
            <ImageSrc style={{ backgroundImage: `url(${pic})`}} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <ImageCenter>
                <Typography variant="h6">
                    { name.toUpperCase() }
                </Typography>
            </ImageCenter>
        </ImageButton>
    );
}

export function Library() {
    return (
        <div className="library">
            { GAMES.map((book) => (
                <div key={ book.name }>
                    <Tile link={ book.link } name={ book.name } pic={ book.pic } />
                </div>
            ))}
        </div>
    );
}

