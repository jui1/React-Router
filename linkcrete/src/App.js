import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './componet/home';
import About from './componet/about';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
