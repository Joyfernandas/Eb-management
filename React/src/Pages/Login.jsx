import React from "react";
import { useState } from "react";
import "../Style/Login.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Login({ form }) {

  const templete = useNavigate();
  const [username, setusername] = useState("");
  console.log(username)
  const [password, setpassword] = useState("");
  console.log(password)
  const navigate = useNavigate();

  function getuser(e) {
    setusername(e.target.value)

  }
  function getpassword(e) {
    setpassword(e.target.value)
  }

  const Handlesubmit = (event) => {
    console.log("Success")
    axios.post("api/token/", { "email": username, "password": password })
      .then(res => {
        console.log("------", res)
        if (res?.status === 200) {

          axios.defaults.headers['Authorization'] = 'JWT ' + res?.data?.access;
          localStorage.setItem('access', res?.data?.access);
          localStorage.setItem('role', res?.data?.role);
          form(true);

          if (res?.data?.role === "Manager") {

            navigate('/dash')


          }

          else {
            navigate(`/customerform/${res?.data?.id}`)
          }
        }


      })
      .catch(err => {

        console.log("---", err?.res.data.detail)
      })


  }


  return (
    <>
      <div class="wrapper">
        <div class="title">Login</div>
        <div className="form">
          <div class="field">
            <input type="text" required name="email" onChange={getuser} />
            <label>Usename</label>
          </div>
          <div class="field">
            <input
              type="password"
              required
              name="password"
              onChange={getpassword}
            />
            <label>Password</label>
          </div>

          <div class="field">
            <input type="submit" value="Login" onClick={Handlesubmit} />
          </div>
        </div>
      </div>
    </>
  );
}
