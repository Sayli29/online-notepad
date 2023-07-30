import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Navbar ></Navbar>
      {/* <Home /> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/slug' component={Editor}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
