import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import Editor from './pages/Editior/Editor';
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
      {/* <Navbar ></Navbar> */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/slug' element={<Editor/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
