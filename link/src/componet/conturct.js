import { Link, Outlet } from "react-router-dom";

function Contact()
{
   
return(
    <div>
        <h1>Contact us page</h1>
        <h2>Here we have some other Buness</h2>
        <Link to ="company"> Comapny</Link>
        <br/>
        <Link to =" Other">Other</Link> <br/>
        <Link to ="chanel">chanel</Link>
        <Outlet/>

    </div>
)
}
export default Contact;