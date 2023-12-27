

export const TILE_SIZE = 50;

export const FOOD = new Image(TILE_SIZE, TILE_SIZE);
FOOD.src = "https://picsum.photos/50?random=1";

export const HEAD: Array<HTMLImageElement> = 
    Array(4).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
HEAD[0].src = "https://picsum.photos/50?random=2";
HEAD[1].src = "https://picsum.photos/50?random=3";
HEAD[2].src = "https://picsum.photos/50?random=4";
HEAD[3].src = "https://picsum.photos/50?random=5";

export const BODY: Array<HTMLImageElement> =
    Array(6).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
BODY[0].src = "https://picsum.photos/50?random=5";
BODY[1].src = "https://picsum.photos/50?random=6";
BODY[2].src = "https://picsum.photos/50?random=7";
BODY[3].src = "https://picsum.photos/50?random=8";
BODY[4].src = "https://picsum.photos/50?random=9";
BODY[5].src = "https://picsum.photos/50?random=10";

export const TAIL: Array<HTMLImageElement> =
    Array(4).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
TAIL[0].src = "https://picsum.photos/50?random=11";
TAIL[1].src = "https://picsum.photos/50?random=11";
TAIL[2].src = "https://picsum.photos/50?random=12";
TAIL[3].src = "https://picsum.photos/50?random=13";


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
    Down: { dx: 0, dy: 1, _state: 1 } as IDir,
    Left: { dx: -1, dy: 0, _state: 2 } as IDir,
    Right: { dx: 1, dy: 0, _state: 3 } as IDir,
}
