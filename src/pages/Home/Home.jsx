import { Button, Container, CssBaseline, Typography, keyframes, Box } from "@mui/material";
const Home = () => {
    const leftAnimation = keyframes`
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
        opacity: 1;
        
    }`;
    return (
        <>
            <CssBaseline></CssBaseline>
            <Container 
            maxWidth='2xl' 
            sx={{ color: '#ffffff',
            background: "radial-gradient(ellipse at left 400px, #1b1c3c -20% ,#060712 35%)",
            height: '100vh',
            paddingTop: '60px',
            position: 'fixed', 
                }}>
                    <Box  
                    sx={{ 
                        position: "relative",
                        width: '260px',
                        height: '40px',
                        border: '2px solid white',
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
                            padding: '8px',
                            textAlign: 'center',
                            fontSize: '13px',
                            
                         }}>
                        <span>Simple notes planning tool</span>
                        </Typography>
                    </Box>
                    <Typography  
                    level="h1"
                    sx={{ fontSize: '4rem',
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
                     level="h1" sx={{
                    fontSize: '4rem',
                    fontWeight: '600',
                    position: "relative",
                    top: '155px',
                    left: '40px',
                    animation: `${leftAnimation} 1s 0.5s linear forwards`,
                    //animation name duration delay function fillmode
                    opacity:0,
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
                    opacity:0,
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
                            opacity:0,
    
                        }}>let's start</Button>
                
            </Container>
        </>
    );
}

export default Home;