import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const Hometheme = createTheme({
    typography : {
        h1: {
            [theme.breakpoints.down("xl")]:{
                fontSize: "5rem",
            },
            [theme.breakpoints.down("lg")]:{
                fontSize: "3rem",
            },
            [theme.breakpoints.down("md")]: {
                fontSize: "2.5rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "1rem",
            },
        },
    },
});

export default Hometheme;