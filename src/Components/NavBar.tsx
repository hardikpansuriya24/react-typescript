import React, { useContext } from 'react';
import { myContext } from '../Pages/Context';
import { Link } from 'react-router-dom';
import Axios, { AxiosResponse } from 'axios';

export default function NavBar() {
  const ctx = useContext(myContext);
  const logout = () => {
    Axios.get("http://localhost:4000/logout", {
      withCredentials: true
    }).then((res : AxiosResponse) => {
      if (res.data === "success") {
        window.location.href = "/";
      }
    })
  }
    return (
      <div className="NavContainer">
         
         {ctx ? (
              <>
                <Link to="/home">Home</Link>
                <Link onClick={logout} to="/logout">Logout</Link>
              </>
            ) : (
              <>
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>  
              </>
            )
          }
      </div>
    )
}