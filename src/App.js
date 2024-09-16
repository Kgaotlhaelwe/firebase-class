import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch , Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
