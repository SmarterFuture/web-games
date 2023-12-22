import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TicTacToe from "./components/TicTacToe/TicTacToe";
import { NoPage, Leaderboard, Games, NavBar } from "./components";


const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <Router>
            <NavBar />
            <Routes>
                <Route index element={ <Games/> } />
                <Route path="leaderboard" element={ <Leaderboard/> }/>
                <Route path="games">
                    <Route path="" element={ <Games/> } />
                    <Route path="tictactoe" element={ <TicTacToe/> } />
                </Route>
                <Route path="user">
                    <Route path="" element={ <p>tbd</p> } />
                    <Route path="myaccount" element={ <p>tbd</p> } />
                </Route>
                <Route path="*" element={ <NoPage/> } />
            </Routes>
        </Router>
    </StrictMode>
);
