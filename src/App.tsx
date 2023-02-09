import React, { useContext } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import "./main.css";
import Register from './Pages/RegisterPage';
import { myContext } from './Pages/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const ctx = useContext(myContext);
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
         
          {
            ctx ? (
              <>
                {ctx.isAdmin ? <Route path='/admin' element={<AdminPage />} /> : null}
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" element={<HomePage />} />
              </>
              ) : (
              <>
                  <Route index element={<Login />} />
                  <Route path="/register" element={<Register />} />
              </>  
            )
          } 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
