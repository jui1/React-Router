import {Link} from 'react-router-dom'
function page404()
{
    return (
        <div>
            <h1>404 page</h1>
            <p>this url isnot present</p>
            <Link to="/"> Go To Home page</Link>
        </div>
    )
}

export default page404;