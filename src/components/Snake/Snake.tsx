import { useEffect, useRef, useState } from "react";
import { Player } from "./player";
import { Board } from "./board";
import { renderer } from "./renderer";
import { Dir, TILE_SIZE } from "./shared";



// so far, only exploring how does useEffect work
function Snake() {
    const board = useRef<Board | null>(null);
    const player = useRef<Player | null>(null);
    const [dead, kill] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if ( canvasRef.current === null ) {
            throw new Error("Canvas not defined");
        }
        
        // TODO: change canvas accordingly
        canvasRef.current.width = TILE_SIZE * 10.5;
        canvasRef.current.height = TILE_SIZE * 10.5;

        ctxRef.current = canvasRef.current.getContext("2d");
        
        if ( ctxRef.current ) {

            // TODO: somewhat implement scale to be dependent (and good looking) on screen screen size
            ctxRef.current.scale(.5, .5);
            board.current = new Board(20, 20);
            player.current = new Player(board.current);
            const currentPlayer = player.current;

            window.onkeydown = (e) => {
                if ( e.key === "w" || e.key === "ArrowUp") {
                    currentPlayer.change_dir(Dir.Up);
                } else if ( e.key === "s" || e.key === "ArrowDown" ) {
                    currentPlayer.change_dir(Dir.Down);
                } else if ( e.key === "a" || e.key === "ArrowLeft" ) {
                    currentPlayer.change_dir(Dir.Left);
                } else if ( e.key === "d" || e.key === "ArrowRight" ) {
                    currentPlayer.change_dir(Dir.Right);
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
            if ( player.current && ctxRef.current && !dead) {
                const ctx = ctxRef.current;
                kill(player.current.move());
                renderer(ctx, player.current);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [!dead]);

    return (
        <div className="center_mid">
            <div>
                <canvas id="game-canvas" ref={canvasRef} style={{border: "solid thin red"}}></canvas>
            </div>
        </div>
    );
};

export default Snake;
