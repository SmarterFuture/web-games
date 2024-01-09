import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NoPage, Leaderboard, Library, NavBar, Profile, Snake, TicTacToe, Footer, FlappyBird, MyAccount, About } from "./components";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/styles";
import { CssBaseline } from "@mui/material";


const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <NavBar />
                <Routes>
                    <Route index element={ <About/> } />
                    <Route path="leaderboard" element={ <Leaderboard /> }/>
                    <Route path="games">
                        <Route path="" element={ <Library/> } />
                        <Route path="tictactoe" element={ <TicTacToe/> } />
                        <Route path="snake" element={ <Snake/> } />
                        <Route path="flappybird" element={ <FlappyBird/> } />
                    </Route>
                    <Route path="user">
                        <Route path="" element={ <Profile/> } />
                        <Route path="myaccount" element={ <MyAccount/> } />
                    </Route>
                    <Route path="*" element={ <NoPage/> } />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    </StrictMode>
);
