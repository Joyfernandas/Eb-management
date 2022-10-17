import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Customer from './Component/Customer';
import Employe from './Component/Employe';
import Units from './Component/Units';
import Connection, { ConnectionForm } from './Component/Connection';
import Dashboard from './Component/Dashboard';
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Customerpage from './Component/Customerpage';
import Register from './Component/Register.';
import Payment from './Component/Payment';



const UserContext = createContext()

function App() {

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const PrivateRoute = () => {
    return (
      auth ?
        <Outlet /> : <Navigate to='/login' />
    )
  }
  useLayoutEffect(() => {
    async function getDatas() {

      let temp = localStorage.getItem('access')
      if (temp !== null) {
        axios.defaults.headers['Authorization'] = 'JWT ' + temp;
        setAuth(true);
      }
      else { setAuth(false) }



    }
    getDatas();
  }, [])
  if (loading) return (<></>)

  return (
    <>

      <UserContext.Provider >
        <HashRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login form={setAuth} />} />
            <Route path='/register' element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path='/dash' element={<Dashboard />} />
              <Route path='/customer' element={<Customer />} />
              <Route path='/customerform/:id' element={<Customerpage />} />
              <Route path='/employe' element={<Employe />} />
              <Route path='/connection' element={<Connection />} />
              <Route path='/units' element={<Units />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/form/:id' element={<ConnectionForm />} />
            </Route >
          </Routes>
        </HashRouter>
      </UserContext.Provider>

    </>
  );
}

export default App;
