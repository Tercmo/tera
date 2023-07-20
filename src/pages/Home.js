import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import CelebritiesList from '../components/CelebritiesList';

const Home = () => {
  const { user } = useAuth0();
  const [celebrity, setCelebrity] = useState([]);

  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  };

  const url = process.env.REACT_APP_URL_APP;
  useEffect(() => {
    Axios.get(url, { headers })
      .then(resp => {
        setCelebrity(resp.data);
      });
  }, []);

  return (
    <div>
      <CelebritiesList celebrities={celebrity} />

    </div>
  );
};

export default Home;
