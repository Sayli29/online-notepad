import { Button, Container, CssBaseline } from "@mui/material";
const Home = () => {
    return (
        <>
            <Container 
            maxWidth='2xl' 
            sx={{ color: '#ffffff',
                background: "radial-gradient(ellipse at left 400px, #1b1c3c -20% ,#060712 35%)",
            // backgroundPosition: "left",
            height: '100vh',
            paddingTop: '150px' }}>
                <div>
                    <span><h1>Start Typing</h1></span>
                    <span><h1>and Sharing Notes...</h1></span>
                    <Button

                        variant="contained"
                        size="large"
                        sx={{
                            background: "#bf00ff",
                        }}>let's start</Button>
                </div>
            </Container>
        </>
    );
}

export default Home;