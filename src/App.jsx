import Navbar from './components/layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline></CssBaseline>
      <Navbar></Navbar>
      <Home />
    </>
  )
}

export default App
