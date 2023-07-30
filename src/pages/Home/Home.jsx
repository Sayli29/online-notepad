import { Button, Container, CssBaseline, Typography, keyframes, Box, ThemeProvider } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import Navbar from "../../components/layout/Navbar/Navbar";
import {Link } from 'react-router-dom';
import Hometheme from "../../theme/Hometheme";
import { codeGenerator } from "../../utlis/Slug";
import { useState } from "react";
const Home = () => {
    const [code, setCode] = useState('hello');

    const leftAnimation = keyframes`
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
        opacity: 1;
        
    }`;


    const rightboxAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }`;

    const quartercircleAnimation = keyframes`
    from{
        transform: translateY(-30%);
        opacity: 0px;
    }
    to{
        width: 300px;
        height: 300px;
        transform: translateY(0);
        opacity: 1px;
    }`;

    function handleButtonClick(){
        let unicode = codeGenerator();
        console.log(typeof unicode);
        setCode(unicode);
        console.log(code);

    }

    return (
        <>  
            <Navbar ></Navbar>
            <ThemeProvider theme = {Hometheme}>
            <CssBaseline></CssBaseline>
            <Container
                maxWidth='2xl'
                sx={{
                    color: '#ffffff',
                    background: "radial-gradient(ellipse at left 400px, #1b1c3c -20% ,#060712 38%)",
                    height: '100vh',
                    paddingTop: '60px',
                    position: 'fixed',
                }}>
                <Box
                    sx={{
                        position: "relative",
                        width: '260px',
                        height: '40px',
                        alignItems: 'center',
                        backgroundColor: 'rgba(133, 137, 170, 0.3)',
                        borderRadius: '20px',
                        top: '100px',
                        left: '40px',
                        animation: `${leftAnimation} 0.4s 0.7s linear forwards`,
                        //animation name duration delay function fillmode
                        opacity: '0',
                    }}>
                    <Typography

                        sx={{
                            letterSpacing: '2px',
                            padding: '10px',
                            textAlign: 'center',
                            fontSize: '15px',
                        }}>
                        <span>Simple notes planning tool</span>
                    </Typography>
                </Box>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '4rem',
                        fontWeight: '600',
                        position: 'relative',
                        top: '150px',
                        left: '40px',
                        lineHeight: '4rem',
                        animation: `${leftAnimation} 1s 0.5s linear forwards`,
                        //animation name duration delay function fillmode
                        opacity: 0,
                    }}>
                    Start Typing
                </Typography>
                <Typography
                    variant ="h1" sx={{
                        fontSize: '4rem',
                        fontWeight: '600',
                        position: "relative",
                        top: '155px',
                        left: '40px',
                        animation: `${leftAnimation} 1s 0.5s linear forwards`,
                        //animation name duration delay function fillmode
                        opacity: 0,
                    }}>
                    and Sharing Notes
                </Typography>
                <Box
                    sx={{
                        position: "relative",
                        left: '40px',
                        top: '165px',
                        animation: `${leftAnimation} 1s 1s linear forwards`,
                        //animation name duration delay function fillmode
                        opacity: 0,
                    }}>
                    <Typography level='body1'>
                        Notes is the best place to jot down the quick thoughts or to save longer
                    </Typography>
                    <Typography level='body1'>
                        notes filled with checklists, web links,scanned docs,
                    </Typography>
                    <Typography level='body1'>
                        handwritten notes or sketches.
                    </Typography>
                </Box>
                <Link to="/slug">
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        position: "relative",
                        top: '200px',
                        left: '40px',
                        borderRadius: '20px',
                        background: "linear-gradient(180deg, rgba(255,102,118,1) 0%, rgba(255,0,18,1) 0%, rgba(141,18,37,1) 100%)",
                        animation: `${leftAnimation} 1s 1.3s linear forwards`,
                        //animation name duration delay function fillmode
                        opacity: 0,
                        textTransform: 'none',

                            }}
                        onClick={handleButtonClick}>New note</Button></Link>


                {/* Right side elements  */}
                {/* outer rectangle */}
                {/* <Box sx={{
                    width: '500px',
                    height: '561px',
                    // border: '2px solid white',
                    position: 'absolute',
                    top: '175px',
                    right: '0px',
                    backgroundColor: 'rgba(39, 41, 72, 0.3)',
                    zIndex: '1',
                    animation: `${rightboxAnimation} 1s 2.5s ease-in-out forwards`,
                    opacity: 0,
                }}> */}

                    {/* blur quarter circle */}
                    {/* <Box
                        sx={{
                            width: '500px',
                            height: '470px',
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                            background: "#D8D7D6",
                            opacity: '0.1',
                            // backdropFilter: "blur(10px)",
                            borderRadius: '0 0 80% 0',
                            zIndex: '4'
                        }}></Box> */}

                    {/* inner rectangle */}
                    {/* <Box sx={{
                        width: '478px',
                        height: '490px',
                        // border: '2px solid white',
                        position: 'relative',
                        top: '75px',
                        left: '70px',
                        backgroundColor: 'rgba(6, 7,18, 0.8)',
                        // filter: "blur(0.8px)",
                        zIndex: '2',

                    }}> */}

                        {/* circle */}
                        {/* <Box sx={{
                            width: '200px',
                            height: '200px',
                            position: 'relative',
                            // border: '2px solid white',
                            borderRadius: '150px',
                            backgroundColor: 'rgba(99, 231, 244, 0.8)',
                            top: '55px',
                            left: '50px',
                            zIndex: '3',
                            filter: "blur(30px)",
                        }}>
                        </Box>
                    </Box>
                </Box> */}

                {/* red quarter circle */}
                {/* <Box
                    sx={{
                        // width: '300px',
                        // height: '300px',
                        position: 'absolute',
                        top: '175px',
                        right: '200px',
                        animation: `${quartercircleAnimation} 0.5s 3s ease-in-out forwards`,
                        // background: 'linear-gradient(160deg, rgba(236,69,76,1) 14%, rgba(222,59,64,1) 48%, rgba(173,34,38,1) 90%);',
                        // opacity: '0.1',
                        // backdropFilter: "blur(10px)",
                        background: "linear-gradient(160deg, rgba(255,102,118,0.5) 0%, rgba(255,0,18,1) 0%, rgba(141,18,37,1) 100%)",
                        borderRadius: '0 0 100% 0',
                        zIndex: '5'
                    }}></Box> */}
                
                {/* blue circle  */}
                {/* <Box
                    sx={{
                        width: '200px',
                        height: '200px',
                        position: 'absolute',
                        // border: '2px solid white',
                        borderRadius: '150px',
                        backgroundColor: 'rgba(99, 231, 244, 1)',
                        top: '55px',
                        left: '50px',
                        right: '0px',
                        zIndex: '6',
                    }}></Box> */}


            </Container>
        </ThemeProvider>
        </>
    );
}

export default Home;