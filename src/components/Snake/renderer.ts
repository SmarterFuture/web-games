import { Player } from "./player";
import { FOOD, HEAD, BODY, TAIL, TILE_SIZE, IPos, SnakeSegment } from "./shared";


function bodyType(snakeIn: number, snakeOut: number): number {
    const [a, b] = [snakeIn, snakeOut].sort();
    return a + +!!a + b - 1;
}

// player does contain all the import information about board and its location within
export function renderer(ctx: CanvasRenderingContext2D, player: Player) {
    
    const food: IPos = player.board.food;
    ctx.drawImage(FOOD, food.x * TILE_SIZE, food.y * TILE_SIZE);

    const body: Array<SnakeSegment> = player.body;
    
    for (let i = 0; i < body.length; i++) {
        const curr: number = body[i].dir;
        const next: number = body[i + 1].dir || 1;

        let img: HTMLImageElement;
        if ( i === 0) {
            img = HEAD[next];
        } else if ( next === undefined ) {
            img = TAIL[curr];
        } else {
            img = BODY[bodyType(curr, next)];
        }
        
        ctx.drawImage(img, body[i].x * TILE_SIZE, body[i].y * TILE_SIZE);
    }
    ctx.stroke();
    
    return; 
}
