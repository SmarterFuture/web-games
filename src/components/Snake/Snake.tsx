import { useEffect, useRef, useState } from "react";
import { Player } from "./player";
import { Board } from "./board";
import { renderer } from "./renderer";
import { Canvas, Dir, TILE_SIZE } from "./shared";
import {Typography} from "@mui/material";



// so far, only exploring how does useEffect work
function Snake() {
    const board = useRef<Board | null>(null);
    const player = useRef<Player | null>(null);
    const [dead, kill] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [paused, setPaused] = useState<boolean>(true);
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        if ( canvasRef.current === null ) {
            throw new Error("Canvas not defined");
        }
        
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;

        const scale = canvasRef.current.height / ( 21 * TILE_SIZE );

        ctxRef.current = canvasRef.current.getContext("2d");
        
        if ( ctxRef.current ) {

            ctxRef.current.scale(scale, scale);
            board.current = new Board(20, 20);
            player.current = new Player(board.current);
            const currentPlayer = player.current;

            window.onkeydown = (e) => {
                switch ( e.key ) {
                    case "w":
                    case "ArrowUp":
                        currentPlayer.change_dir(Dir.Up);
                        break;
                    case "s":
                    case "ArrowDown":
                        currentPlayer.change_dir(Dir.Down);
                        break;
                    case "a":
                    case "ArrowLeft":
                        currentPlayer.change_dir(Dir.Left);
                        break;
                    case "d":
                    case "ArrowRight":
                        currentPlayer.change_dir(Dir.Right);
                        break;
                    case "p":
                        setPaused(elm => !elm);
                        break
                    default:
                }
            }
        }

        return () => {
            ctxRef.current = null;
            board.current = null;
            player.current = null;
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if ( player.current && ctxRef.current && !paused && !dead) {
                const ctx = ctxRef.current;
                setScore(player.current.score);
                kill(player.current.move());
                renderer(ctx, player.current);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [paused, dead]);

    return (
        <div className="box">
            <Typography variant="h5">
                Score: { score }
            </Typography>
            <Canvas id="game-canvas" ref={canvasRef}></Canvas>
        </div>
    );
};

export default Snake;
