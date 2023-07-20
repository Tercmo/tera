import React, { Fragment, useState } from 'react';
import CelebritiesList from './CelebritiesList';
import Home from '../pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

const SearchBar = () => {
  const { isAuthenticated } = useAuth0();
  const [celData, setCelData] = useState();
  const [celebrity, setCelebrity] = useState();

  function handleChange(e) {
    e.preventDefault();
    setCelebrity(e.target.value);
  }

  function getCelData() {
    const key = process.env.REACT_APP_KEY;
    const headers = { 'X-Api-Key': key };
    const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`;
    Axios.get(url, { headers }).then((res) => {
      setCelData(res.data);
    });
  }

  return (
    <Fragment>
      <div className={`search-bar ${isAuthenticated ? 'authenticated' : 'unauthenticated'}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className={`d-flex ${isAuthenticated ? 'authenticated' : 'unauthenticated'}`}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar celebridad"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <button className="btn btn-primary" type="button" onClick={getCelData}>
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {celData ? <CelebritiesList celebrities={celData} /> : <Home />}
    </Fragment>
  );
};

export default SearchBar;
