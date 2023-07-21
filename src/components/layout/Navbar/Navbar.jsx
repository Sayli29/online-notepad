import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ToggleCompo from "./ToggleCompo";

const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <>
            <AppBar sx={{
                background: "#483285", boxShadow: "none" }} disableElevation>
                <Toolbar>
                    <EditNoteIcon></EditNoteIcon>
                    <Typography sx={{ marginLeft: '6px' }}>
                        EDITOR
                    </Typography>
                    {isMatch ? (
                        <>
                            <ToggleCompo />
                        </>
                    ) : (
                        <>
                            <Tabs sx={{ marginLeft: "auto" }}
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                indicatorColor="secondary">
                                <Tab label="Fork"></Tab>
                                <Tab label={<FavoriteBorderIcon/>}></Tab>
                                <Tab label={<GitHubIcon/>}></Tab>
                            </Tabs>
                        </>
                    )
                    }
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;