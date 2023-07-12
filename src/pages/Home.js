import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment } from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
    const { user } = useAuth0();
    const [celebrity, setCelebrity] = useState([]);
    const key = process.env.REACT_APP_KEY;
    const headers = {'X-Api-Key': key };
   const nombre = 'Michael Jordan';
    const url = process.env.REACT_APP_URL_APP+nombre;
    useEffect( ()=>{
      Axios.get(url, {headers})
      .then(resp=>{console.log(resp.data)
      setCelebrity(resp.data)
      console.log(celebrity)
      })
      .catch(error=>{console.log(error)})
    },[]
    
    )
   

return (
  <div className='bs-autCard'>
  <img src={user.picture} className='bs-autCard-image' alt={user.name}  />
  <h3 className='bs-autCard-name'>{user.name} </h3>
  <p className='bs-autCard-email'> Correo Electronico: {user.email}</p> 
  <div>
 
  {celebrity.map(cel=>{return(
  <Fragment>
  <h2> {cel.name}  </h2>
    <h4> {cel.birthday}</h4> 
    <h4>{cel.age}</h4>
    </Fragment>
    )})}
  </div>
  </div>
)
}
export default Home