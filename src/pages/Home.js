import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const key = 'AsQys6MsjhjNVkymKoszaQ==GLZFjEfqtVfSTTkD';
    const headers = {'X-Api-Key': key };
   const nombre = 'Michael Jordan';
    const url ='https://api.api-ninjas.com/v1/celebrity?name='+nombre;
    useEffect( ()=>{
      Axios.get(url, {headers})
      .then(resp=>{console.log(resp.data)})
      .catch(error=>{console.log(error)})
    },[]
    
    )
   
   /* if (isLoading) {
      return <div>Cargando...</div>;
    }
  
    return (
      isAuthenticated && (
        <div className='bs-autCard'>
        <img src={user.picture} className='bs-autCard-image' alt={user.name}  />
        <h3 className='bs-autCard-name'>{user.name} </h3>
        <p className='bs-autCard-email'> Correo Electronico: {user.email}</p>
           </div>
      )
    );*/

return (
  <div> Home </div>
)

}

export default Home