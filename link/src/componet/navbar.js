import {Link ,NavLink} from 'react-router-dom'

function Navbar(){
 return (
    <div>
    <ul className='navbar'>
    <li><NavLink className="navbarlink"  style={{color:'red'}} to="/about">About</NavLink></li>
    <li><NavLink  className="navbarlink" to="/">Home</NavLink></li> 
    <li><NavLink className="navbarlink" to = "/contact">contact</NavLink></li>
    <li><NavLink  className="navbarlink" to = "/user/:anil">Anil</NavLink></li>
    <li><NavLink className="navbarlink" to = "/user/Jui">Jui</NavLink></li>
    <li><NavLink className="navbarlink" to = "/filte">Filter</NavLink></li>
    </ul>
    
    </div>
    
 )
}
export default Navbar;