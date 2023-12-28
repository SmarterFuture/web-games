import { SvgIconProps } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp, Pause, PlayArrow } from "@mui/icons-material";
import { Dispatch, ReactElement, SetStateAction } from "react";
import assets from "../../shared/assets.json";
const snakeAssets = assets.snake;


export interface IPos {
    x: number,
    y: number
}

export interface IDir {
    dx: number,
    dy: number,
    _state: number
}

export interface SnakeSegment {
    x: number,
    y: number,
    dir: number
};

export const Dir = {
    Up: { dx: 0, dy: -1, _state: 0 } as IDir,
    Left: { dx: -1, dy: 0, _state: 1 } as IDir,
    Down: { dx: 0, dy: 1, _state: 2 } as IDir,
    Right: { dx: 1, dy: 0, _state: 3 } as IDir,
}

export interface IArrowKey {
    icon: ReactElement<SvgIconProps>,
    value: IDir
}

export interface IControlsHandler {
    pressHandler: (dir: IDir) => void,
    pauseHandler: Dispatch<SetStateAction<boolean>>,
    paused: boolean
}

export interface ISceenArgs {
    speed: number
}

export const TILE_SIZE = 40;

export const FOOD = new Image(TILE_SIZE, TILE_SIZE);
FOOD.src = snakeAssets.food;

export const HEAD: Array<HTMLImageElement> = 
    Array(4).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
HEAD[0].src = snakeAssets.head.up;          // from 2 -> 0
HEAD[1].src = snakeAssets.head.right;       // from 3 -> 1
HEAD[2].src = snakeAssets.head.down;        // from 0 -> 2
HEAD[3].src = snakeAssets.head.left;        // from 1 -> 3

export const BODY: Array<HTMLImageElement> = 
    Array(6).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
BODY[0].src = snakeAssets.body.downright;   // 2 - 3 connection
BODY[1].src = snakeAssets.body.topdown;     // 0 - 2 connection
BODY[2].src = snakeAssets.body.leftdown;    // 1 - 2 connection
BODY[3].src = snakeAssets.body.topright;    // 0 - 3 connection
BODY[4].src = snakeAssets.body.leftright;   // 1 - 3 connection
BODY[5].src = snakeAssets.body.topleft;     // 0 - 1 connection

export const TAIL: Array<HTMLImageElement> = 
    Array(4).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
TAIL[0].src = snakeAssets.tail.up;          // from 2 -> 0
TAIL[1].src = snakeAssets.tail.right;       // from 3 -> 1
TAIL[2].src = snakeAssets.tail.down;        // from 0 -> 2
TAIL[3].src = snakeAssets.tail.left;        // from 1 -> 3

export const ARROWS: Array<IArrowKey> = [
    { icon: <KeyboardArrowUp />, value: Dir.Up },
    { icon: <KeyboardArrowLeft />, value: Dir.Left },
    { icon: <KeyboardArrowRight />, value: Dir.Right },
    { icon: <KeyboardArrowDown />, value: Dir.Down }
];

export const PAUSED = [
    <Pause />,
    <PlayArrow />
]

