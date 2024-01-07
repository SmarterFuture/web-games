

interface IPage {
    name: string,
    link: string,
}

export const PAGES: Array<IPage> = [
    { name: "Home", link: "" },
    { name: "Leaderboard", link: "/leaderboard" },
    { name: "Games", link: "/games" }
]

export const USER_PAGES: Array<IPage> = [
    { name: "Profile", link: "/user"},
    { name: "My Account", link: "/user/myaccount" }
]

export const LOGO_STYLE_SMALL = {
    mr: 3,
    letterSpacing: ".1em",
    textDecoration: "none",
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
};

export const LOGO_STYLE_BIG = {
    mr: 3,
    letterSpacing: ".1em",
    textDecoration: "none",
    display: { xs: "none", md: "flex" },
};

export const MENU_STYLE_BIG = {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
};

export const MENU_STYLE_SMALL = {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
};

