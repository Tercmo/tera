import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import { Login } from './auth/Login'; // Agregamos la importación del componente Login
import { Logout } from './auth/Logout';
import './css/general.css';

function App() {
  const { isAuthenticated } = useAuth0();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/home'>Portada</Link>
          {isAuthenticated && <Link to='/favorites'>Favoritos</Link>}
          {isAuthenticated ? <Logout /> : <Login />} {/* Agregamos esta línea */}
          <button
            className={`mode-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path='/favorites'
            element={isAuthenticated ? <Favorites /> : <Navigate to='/login' />}
          />
          <Route
            path='/home'
            element={isAuthenticated ? <SearchBar /> : <Navigate to='/login' />}
          />
          <Route
            path='/login' // Agregamos esta ruta para que se muestre el componente Login
            element={<Login />}
          />
        </Routes>
      </main>

      <footer>{/* si alcanzo a hacer el pie de página */}</footer>
    </div>
  );
}

export default App;
