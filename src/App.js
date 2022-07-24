// import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import {HashRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div >
      
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
      </div>
    </Router>
     );
}

export default App;
