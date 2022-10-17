import React from "react";
import Topbar from "../Layouts/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select'
import Swal from "sweetalert2";
import SimpleReactValidator from 'simple-react-validator';
import { useRef } from "react";

export default function Customer() {

  const simpleValidator = useRef(new SimpleReactValidator())
  const [, setForceUpdate] = useState()

  const [input, setInput] = useState([]);
  const [post, setPost] = useState({});
  const [con, setCon] = useState({});
  const [data, setData] = useState({});



  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleChanges = (e) => {
    setData(e);
  };



  const handleSubmit = () => {
    let temp = post
    temp["type"] = data.id
    if (simpleValidator.current.allValid()) {
      axios.post("api/Customer/", temp)
        .then((response) => {
          getvalue()
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
        'Please enter the customer details!',
        'error'
      )
    }

  };

  useEffect(() => {
    getvalue()
  }, []);

  const getvalue = () => {
    axios.get("api/Customer/").then((response) => {
      setInput(response.data);
    });

    axios.get("api/Connection/").then((response) => {
      setCon(response.data);
    });
  }

  const handleDelete = (id) => {
    axios.delete(`api/Customer/${id}/`)
      .then(() => {
        getvalue()
      })
  };

  return (
    <>
      <Topbar />
      <h3 style={{ 'textAlign': 'center', 'fontFamily': "cursive" }}>Customer details</h3>
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
                  <label for="ex3">Cunsumer Nub</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="consumer_nub"
                    required
                    value={post?.consumer_nub}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Cunsumer Nub', post?.consumer_nub, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Name</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="name"
                    required
                    value={post?.name}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Name', post?.name, 'required')}
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
                    value={post?.email}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Email', post?.email, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Mobile</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="mobile"
                    required
                    value={post?.mobile}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Mobile', post?.mobile, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Door_No</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="Door_No"
                    required
                    value={post?.Door_No}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('Door_No', post?.Door_No, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Type</label>

                  <Select class="form-control" value={data} name="data" onChange={(e) => handleChanges(e)} styles={{ 'width': '70px' }} options={con} getOptionLabel={(option) => option.connection_type} getOptionValue={option => option.id} />

                </div>


                <div class="col-xs-12">
                  <label for="ex3">Pincode</label>
                  <input
                    class="form-control"
                    id="ex3"
                    type="text"
                    name="pincode"
                    required
                    value={post?.pincode}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className='text-danger'>
                    {simpleValidator.current.message('pincode', post?.pincode, 'required')}
                  </p>
                </div>
                <div class="col-xs-12">
                  <label for="ex3">Address</label>
                  <input class="form-control"
                    id="ex3"
                    type="text"
                    name="address"
                    required
                    value={post?.address}
                    onChange={(e) => handleChange(e)}
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
              <th>Cunsumer No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Door No</th>
              <th>Pincode</th>
              <th>Address</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {input.map((res) => {
              return (
                <tr>
                  <td>{res.consumer_nub}</td>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.mobile}</td>
                  <td>{res.Door_No}</td>
                  <td>{res.pincode}</td>
                  <td>{res.address}</td>
                  <td>{res.type}</td>
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
