import axios from "axios";
import React, { useState } from "react";
import Topbar from "../Layouts/Topbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import { useRef } from "react";
import Swal from "sweetalert2";

export default function Employe() {
  const simpleValidator = useRef(new SimpleReactValidator())

  const [input, setInput] = useState([]);
  console.log(input);
  const [, setForceUpdate] = useState()
  const [post, setPost] = useState({});
  console.log(post);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (simpleValidator.current.allValid()) {
      axios.post("api/Employee/", post).then((response) => {
        Swal.fire(
          'Success!',
          'Data stored successfully!',
          'success'
        )
          .then(() => {
            getvalue()
          })
      }).catch(err => {

        console.log("err_____", err)
      })
    } else {
      simpleValidator.current.showMessages();
      setForceUpdate(1)
      Swal.fire(
        'Please Fill!',
        'Please enter the employee details!',
        'error'
      )
    }

  };



  useEffect(() => {
    getvalue()

  }, []);


  const getvalue = () => {
    axios.get("api/Employee/").then((response) => {
      setInput(response.data);
    });
  }

  const handleDelete = (id) => {
    axios.delete(`api/Employee/${id}/`)
      .then(() => {
        getvalue()
      })
  };

  return (
    <>
      <Topbar />
      <h3 style={{ 'textAlign': 'center', 'fontFamily': "cursive" }}>Employe details</h3>
      <div class="container">
        <button
          type="button"
          style={{ float: "right", "margin-top": "10px" }}
          class="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add
        </button>

        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3>Add deatils</h3>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="col-xs-12">
                  <label for="ex3">Name:</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="name"
                    required
                    onChange={(e) => handleChange(e)}
                    value={post?.name}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Name', post?.name, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Age:</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="age"
                    required
                    onChange={(e) => handleChange(e)}
                    value={post?.age}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Age', post?.age, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Mobile:</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="mobile"
                    required
                    onChange={(e) => handleChange(e)}
                    value={post?.mobile}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Mobile', post?.mobile, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Email</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="email"
                    required
                    onChange={(e) => handleChange(e)}
                    value={post?.email}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Email', post?.email, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Address</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="address"
                    required
                    onChange={(e) => handleChange(e)}
                    value={post?.address}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Address', post?.address, 'required')}
                  </p>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  style={{ "background-color": "green", color: "white" }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  style={{ color: "white", "background-color": "red" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Button end */}

      {/* table start */}

      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Mobie</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {input.map((res) => {
              return (
                <tr>
                  <td>{res.name}</td>
                  <td>{res.age}</td>
                  <td>{res.mobile}</td>
                  <td>{res.email}</td>
                  <td>{res.address}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-default"
                      style={{ "background-color": "red", color: "white" }}
                      onClick={() => handleDelete(res.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
