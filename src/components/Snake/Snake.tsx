import {useEffect, useRef, useState} from "react";
import { Player } from "./player";



// so far, only exploring how does useEffect work
function Snake() {
    // const currentPlayer = useRef(new Player())
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => setCount(c => c + 1), 100);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        window.onkeydown = (e) => {
            console.log(e.key);
        }
    })

    return (
        <div className="center_mid">
            <div>
                This is snake page. { count }
            </div>
        </div>
    );
};

export default Snake;
