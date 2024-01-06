import React from 'react';
import {Link} from 'react-router-dom'

function Home()

{
    return<>
    <h1>Home page <Link to="/about">About</Link></h1>
    </>
}
export default Home;