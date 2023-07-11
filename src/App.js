import './css/App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import {Login} from './auth/Login';
import { Logout} from './auth/Logout';

function App() {
  const {isAuthenticated} =useAuth0();
  return (
    <div className="App">
      <header className="App-header">
         {isAuthenticated ? (
          <>
          <Home/>
          <Logout/>
          </>
         ): (
          <Login/>
         )}  
      </header>
    </div>
  );
}

export default App;