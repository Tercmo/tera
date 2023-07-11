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

  </div>
  <Fragment>
  {celebrity.map(cel=>{return(
    <h4> {cel.name} - {cel.birthday} - {cel.deathday} - {cel.place_of_birth} - {cel.biography} - {cel.gender} - {cel.imdb_}
    </h4>
    
    )})}</Fragment>
  </div>
)

}

export default Home