import Navbar from './components/layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from "react";


function App() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   setIsMobile(true);
  // }, []);

  return (
    <>
      {/* <CssBaseline></CssBaseline> */}
      <Navbar ></Navbar>
      <Home />
    </>
  )
}

export default App
