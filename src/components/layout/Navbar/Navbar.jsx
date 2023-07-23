import { keyframes } from "@mui/system";
import { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
} from "@mui/material";
import { GitFork } from 'lucide-react';
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditNoteIcon from "@mui/icons-material/EditNote";

const moveFromTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(true); 
    }, []);

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: " #060712",
                    boxShadow: "none",
                    "& .icon": {
                        opacity: isMobile ? 1 : 0,
                        animation: `${moveFromTopAnimation} 0.5s ease-in-out`,
                    },
                }}
            >
                <Toolbar>
                    <Typography
                        sx={{
                            marginLeft: "40px",
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            fontSize: "25px",
                            opacity: isMobile ? 1 : 0,
                            animation: `${moveFromTopAnimation} 0.5s ease-in-out`,
                        }}
                    >
                        Editor
                    </Typography>
                    <Box sx={{ flexGrow: "1" }} />
                    <IconButton
                        color="inherit"
                        className={`icon`}
                        sx={{
                            opacity: isMobile ? 1 : 0,
                            animation: `${moveFromTopAnimation} 0.5s ease-in-out`,
                        }}
                    >
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        className={`icon`}
                        sx={{
                            opacity: isMobile ? 1 : 0,
                            animation: `${moveFromTopAnimation} 0.5s ease-in-out`,
                        }}>
                        <GitFork></GitFork>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        className={`icon`}
                        sx={{
                            opacity: isMobile ? 1 : 0,
                            animation: `${moveFromTopAnimation} 0.5s ease-in-out`,
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
