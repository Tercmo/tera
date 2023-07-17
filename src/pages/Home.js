import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import CelebritiesList from '../components/CelebritiesList';


const Home = () => {
  const { user } = useAuth0();
  const [celebrity, setCelebrity] = useState([]);

  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  }
 
  const url = process.env.REACT_APP_URL_APP;
  useEffect(() => {
    Axios.get(url, { headers })
      .then(resp => {
        setCelebrity(resp.data);
        
      })
  }, [] )

  return (   

  <div>
  <img className='profile-img' src={user.picture} alt={user.name}  />
  <h3>{user.name} </h3>
  <p> Correo Electronico: {user.email}</p> 
  
  <CelebritiesList celebrities={celebrity}/>
  
  </div>
  
)
}
export default Home