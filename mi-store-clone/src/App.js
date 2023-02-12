import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return ( 
      <Router>
        <PreNavbar />
        <Navbar />
      </Router>
  );
}

export default App;
