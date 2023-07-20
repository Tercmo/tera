import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import { Login } from './auth/Login';
import { Logout } from './auth/Logout';
import './css/general.css';
import logoImage from './images/Tera.png'; 

function App() {
  const { isAuthenticated, user } = useAuth0();
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('isDarkMode') === 'true');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const renderUserInfo = () => (
    <div className="ml-lg-auto d-flex align-items-center user-actions">
      <div className="user-info d-flex align-items-center">
        <img
          className="profile-img rounded-circle"
          src={user?.picture}
          alt={user?.name}
          style={{ width: '40px', height: '40px', marginRight: '8px' }}
        />
        <div style={{ lineHeight: '6%' }}>
          <h5 className="text-dark">{user?.name}</h5>
          <p className="text-dark">{user?.email}</p>
        </div>
      </div>
    </div>
  );

  const renderMenuLinks = () => (
    <>
      <Link to="/home" className="nav-link active" aria-current="page">
        Inicio
      </Link>
      <Link to="/favorites" className="nav-link">
        Favoritos
      </Link>
    </>
  );

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="container">
          <Link to="/home" className="navbar-brand">
            <img
              src={logoImage}
              alt="Logo de Proyecto Tera"
              style={{ width: '38px', height: '38px', marginRight: '8px' }}
            />
            Proyecto Tera
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {isAuthenticated && renderMenuLinks()}
            </div>
            {isAuthenticated ? renderUserInfo() : <Login />}
          </div>
          {isAuthenticated && (
            <button className={`mode-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleDarkMode}>
              {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
            </button>
          )}
        </div>
        {isAuthenticated && <Logout />}
      </nav>

      <main>
        <Routes>
          <Route path="/favorites" element={isAuthenticated ? <Favorites /> : <Navigate to="/login" />} />
          <Route
            path="/home"
            element={isAuthenticated ? <SearchBar favorites={favorites} setFavorites={setFavorites} /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer className="text-center mt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                2023 | Elaborado por: <a href="https://github.com/Tercmo">Tercmo</a>
              </p>
              <a href="https://github.com/Tercmo/tera" className="btn btn-primary">
                Accede al código
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
