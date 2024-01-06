import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link,Navigate } from 'react-router-dom';
import About from './componet/about';
import Home from './componet/home';
import Navbar from './componet/navbar';
import Page404 from './componet/page404';
import User from './componet/user'
import Filte from './componet/filte';
import Other from './componet/other';
import Contact from './componet/conturct';
import Company from './componet/comapny';

import Chanel from './componet/chanel';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* <Route path='/*' element={<Page404/>}></Route> */}
          <Route path='/user/:name' element={<User/>} />
          {/* <Route path='/' element={<Navigate to="/"/>}></Route> */}
          <Route path='/filte' element={<User/>} />
          <Route path='/other' element={<Other/>}/>
          <Route path='/contact/' element={<Contact/>} > 
            {/* <Route path='/company' element={<Company/>}/>
           <Route path='/chanel' element={<Chanel/>}/>  */}

         
           </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
