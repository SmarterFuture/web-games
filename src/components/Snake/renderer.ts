import { Player } from "./player";
import { FOOD, HEAD, BODY, TAIL, TILE_SIZE, IPos, SnakeSegment } from "./constants";


function bodyType(snakeIn: number, snakeOut: number): number {
    const [a, b] = [snakeIn, snakeOut].sort();
    return a + +!!a + b - 1;
}

// player does contain all the import information about board and its location within
export function renderer(ctx: CanvasRenderingContext2D, player: Player) {

    ctx.clearRect(0, 0,
        (player.board.width + 1) * TILE_SIZE,
        (player.board.height + 1) * TILE_SIZE
    );
    
    const food: IPos = player.board.food;
    ctx.drawImage(FOOD, food.x * TILE_SIZE, food.y * TILE_SIZE);

    const body: Array<SnakeSegment> = player.body;
    
    for (let i = 0; i < body.length; i++) {
        const curr: number = body[i].dir;
        const nextSegment: SnakeSegment = body[i + 1];
        const next: number = nextSegment ? nextSegment.dir : -1 ;

        let img: HTMLImageElement;
        if ( i === 0 ) {
            img = HEAD[next];
        } else if ( next === -1 ) {
            img = TAIL[curr];
        } else {
            const tmp = (curr + 2) % 4;
            img = BODY[bodyType(tmp, next)];
        }
        
        const pic = new Image();
        pic.src = img.src;

        ctx.drawImage(pic, body[i].x * TILE_SIZE, body[i].y * TILE_SIZE);
    }
    ctx.stroke();
    
    return; 
}
