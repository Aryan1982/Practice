import './App.css';
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import About from './components/About'
import {HashRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
      <div >
        <LoginPage/>
      </div>

     );
}

export default App;
