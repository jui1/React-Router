import {useSearchParams} from 'react-router-dom'

function Filte()
{
    const [SearchParams ,setSearchParams] = useSearchParams();
    console.log(SearchParams.length('age'))
return(
    <div>
        <h1>Filter page</h1>
    </div>
)
}
export default Filte;