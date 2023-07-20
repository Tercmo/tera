import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import { Login } from './auth/Login';
import { Logout } from './auth/Logout';
import './css/general.css';

function App() {
  const { isAuthenticated, user } = useAuth0();
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('isDarkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="App">
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Link to="/home" className="navbar-brand">
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
          <div className="navbar-nav"> {/* Content for all devices */}
            <Link to="/home" className="nav-link active" aria-current="page">
              Inicio
            </Link>
            {isAuthenticated && (
              <Link to="/favorites" className="nav-link">
                Favoritos
              </Link>
            )}
            <a className="nav-link disabled">Deshabilitado</a>
          </div>
          {isAuthenticated && (
            <div className="ml-auto d-flex align-items-center"> {/* Content for all devices */}
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
              <Logout />
            </div>
          )}
        </div>
        <button
          className={`mode-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
        </button>
      </nav>

      <main>
        <Routes>
          <Route
            path="/favorites"
            element={isAuthenticated ? <Favorites /> : <Navigate to="/login" />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <SearchBar /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer>{/* si alcanzo a hacer el pie de página */}</footer>
    </div>
  );
}

export default App;
