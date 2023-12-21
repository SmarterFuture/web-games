import { Streak, Player } from "../../shared/constants";


function safeExtend(
    board: Array<Streak>,
    index: number,
    player: Player | undefined,
    len: number): boolean
{
    const line = board[index] || new Streak(len);
    const out = line.extend(player);
    // this line is sketchy, but considering that JS/TS is always passing mutable references it should be fine
    board[index] = line;
    return out;
}

export function validateTicTacToe(board: Array<Player | undefined>, width: number, len: number): boolean {
    
    let streakRow: Streak = new Streak(len);
    const streakCol: Array<Streak> = Array(width);
    const streakDia: Array<Streak> = Array(6);

    for (let i = 0; i < (width ** 2); i++) {
        const e = board[i];
        const idx = i % width;
        const idy = i / width | 0;

        const posDia: number = idx + idy - width + 5;
        const negDia: number = idx - idy + 1;

        let dia: boolean = false;

        if ( posDia > 2 && posDia < 6) {
            const tmp = safeExtend(streakDia, posDia, e, len);
            dia ||= tmp;
        }
        if ( negDia > -1 && negDia < 3) {
            const tmp = safeExtend(streakDia, negDia, e, len);
            dia ||= tmp;
        }

        if (idx === 0 ) {
            streakRow = new Streak(len);
        }
        const row = streakRow.extend(e);
        const col = safeExtend(streakCol, idx, e, len);

        if ( row || col || dia ) { return true; }
    }

    return false;
}
