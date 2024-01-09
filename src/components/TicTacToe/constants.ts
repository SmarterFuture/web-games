import { MouseEventHandler } from "react";

export enum Player {
    X = "X",
    O = "O"
}

export interface Size {
    side: number,
    endHandler: (winner: Player) => void
}

export interface ITile {
    value: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface History {
    state: Array<Player | undefined>,
    player: Player,
    pos: {
        x: number,
        y: number
    }
    end: boolean
}

export class Streak {
    len: number;
    _target: number;
    _char: Player | undefined;
    
    constructor(target: number) {
        this.len = 0;
        this._target = target;
        this._char = undefined;
    }
    extend(txt: Player | undefined): boolean {
        if (txt === this._char) {
            this.len += 1;
        } else {
            this.len = 1;
            this._char = txt;
        }
        if ( this.len >= this._target && this._char !== undefined ) {
            return true;
        }
        return false;
    }
}

export const MenuProps = {
    PaperProps: {
        style: { 
        maxHeight: "10em"
        }
    }
}

