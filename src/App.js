import { useAuth0 } from '@auth0/auth0-react';
import {Login} from './auth/Login';
import { Logout} from './auth/Logout';
import { Link,Route,Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';


function App() {
  const {isAuthenticated} =useAuth0();
  return (
    <div className="App">
      <header className="App-header">
         {isAuthenticated ? (
          <>
          <nav> 
         
         <Link to='/home' >Portada </Link>
         <Link to='/favorites' >Favoritos </Link>
         <Link to='/logout' >Cerrar Sesión</Link>
          </nav>
          </>
         ): (
          <Login/>
         )}  
      </header>
  
      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<SearchBar />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;