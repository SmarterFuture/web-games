import { Streak, Player } from "./constants";


export function validateTicTacToe(board: Array<Player | undefined>, width: number, len: number): boolean {

    const diagonals: number = 2 * width - 5;
    const negBounds: number = width - 3;

    let streakRow: Streak = new Streak(len);
    const streakCol: Array<Streak> = Array(width).fill(undefined).map(_ => new Streak(len));
    const streakDia: Array<Streak> = Array(2 * diagonals).fill(undefined).map(_ => new Streak(len));

    for (let i = 0; i < (width ** 2); i++) {
        const e = board[i];
        const idx = i % width;
        const idy = i / width | 0;

        const posDia: number = idx + idy - 2 + diagonals;
        const negDia: number = idx - idy + negBounds;

        let dia: boolean = false;

        if ( posDia > ( diagonals - 1 ) && posDia < ( 2 * diagonals ) ) {
            const tmp = streakDia[posDia].extend(e);
            dia ||= tmp;
        }
        if ( negDia > -1 && negDia < diagonals) {
            const tmp = streakDia[negDia].extend(e);
            dia ||= tmp;
        }

        if (idx === 0 ) {
            streakRow = new Streak(len);
        }
        const row = streakRow.extend(e);
        const col = streakCol[idx].extend(e)

        if ( row || col || dia ) { return true; }
    }

    return false;
}
