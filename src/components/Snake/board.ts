

interface IPos {
    x: number,
    y: number
}


export class Board {
    height: number;
    width: number;
    board: Array<boolean>;
    food: IPos;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
        this.board = new Array<boolean>(height * width).fill(false)
        this.food = { x: 0, y: 0};
    }
    center(): IPos {
        return { x: this.width / 2, y: this.height / 2 } as IPos
    }
}
