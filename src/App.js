import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';


function App() {
  return (
        <>

       <Routes>
       <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>

       
       </Routes>
       
        </>
  );
}

export default App;
