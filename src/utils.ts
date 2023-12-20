
interface IStreak {
    len: number
    _target: number
    _char: string
}

class Streak implements IStreak {
    len: number;
    _target: number;
    _char: string;
    
    constructor(target: number) {
        this.len = 0;
        this._target = target;
        this._char = "";
    }
    extend(txt: string): boolean {
        if (txt === this._char) {
            this.len += 1;
        } else {
            this.len = 1;
            this._char = txt;
        }
        if ( this.len >= this._target && this._char !== undefined ) {
            return true;
        }
        return false;
    }
}

export function validateSudoku(board: Array<string>, width: number, len: number): boolean {
    
    let streakRow: Streak = new Streak(len);
    const streakCol: Array<Streak> = Array(width);
    
    for (let i = 0; i < (width ** 2); i++) {
        const e = board[i];
        const idx = i % width;
        if (idx === 0 ) {
            streakRow = new Streak(len);
        }
        const row = streakRow.extend(e);
        
        const line = streakCol[idx] || new Streak(len);
        const col = line.extend(e);
        streakCol[idx] = line;

        if ( row || col ) { return true; }
    }

    return false;
}
