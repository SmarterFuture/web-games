

export interface IGameBook {
    link: string,
    pic: string,
    name: string,
}

export const GAMES: Array<IGameBook> = [
    { link: "/games/tictactoe", name: "Tic Tac Toe", pic: "https://picsum.photos/400"},
    { link: "/games/snake", name: "Snake", pic: "https://picsum.photos/400?random=2"},
    { link: "/games/flappybird", name: "Flappy Bird", pic: "https://picsum.photos/400?random=3"}
]
