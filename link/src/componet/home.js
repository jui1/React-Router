
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=  useNavigate();
  const nav =() =>{
   let x=true;
   if(x){
    navigate('/about')
   } else{
    navigate('/filter')
   }
  }
  return (
    <>
      <h1>About page</h1>
      {/* <button onClick={()=>navigate('/about')}>go to about</button>
      <button  onClick={()=>navigate('/filter')}>go to filter</button> */}
      <button onClick={()=>nav()} >go to about</button>
      <button>go to filter</button>
    </>
  );
}

export default Home;
