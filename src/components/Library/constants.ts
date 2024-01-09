import assets from "../../shared/assets.json";
const banners = assets.banners;


export interface IGameBook {
    link: string,
    pic: string,
    name: string,
}

export const GAMES: Array<IGameBook> = [
    { link: "/games/tictactoe", name: "Tic Tac Toe", pic: banners.snake },
    { link: "/games/snake", name: "Snake", pic: banners.tictactoe },
    { link: "/games/flappybird", name: "Flappy Bird", pic: banners.flappy }
]
