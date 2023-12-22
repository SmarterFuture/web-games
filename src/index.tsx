import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TicTacToe from "./components/TicTacToe/TicTacToe";
import { NoPage, Leaderboard, Library, NavBar, Profil } from "./components";


const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <Router>
            <NavBar />
            <Routes>
                <Route index element={ <Library/> } />
                <Route path="leaderboard" element={ <Leaderboard/> }/>
                <Route path="games">
                    <Route path="" element={ <Library/> } />
                    <Route path="tictactoe" element={ <TicTacToe/> } />
                </Route>
                <Route path="user">
                    <Route path="" element={ <Profil/> } />
                    <Route path="myaccount" element={ <Profil/> } />
                </Route>
                <Route path="*" element={ <NoPage/> } />
            </Routes>
        </Router>
    </StrictMode>
);
