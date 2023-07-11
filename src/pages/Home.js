import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
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
    );


}

export default Home