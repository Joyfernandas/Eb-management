import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select'
import Swal from "sweetalert2";
import SimpleReactValidator from 'simple-react-validator';
import { useRef } from "react";


function Register() {
    const simpleValidator = useRef(new SimpleReactValidator())
    const [, setForceUpdate] = useState()

    const [post, setPost] = useState({});
    console.log(post)
    const [con, setCon] = useState({});
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleChanges = (e) => {
        setData(e);
    };


    useEffect(() => {
        getvalue()
    }, []);

    const getvalue = () => {


        axios.get("api/Connection/").then((response) => {
            setCon(response.data);
        });
    }

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

                    temp('/login')
                }).catch(err => {

                    console.log("err_____", err)
                })
        } else {
            simpleValidator.current.showMessages();
            setForceUpdate(1)
            Swal.fire(
                'Please Fill!',
                'Register the form!',
                'error'
            )
        }

    };

    return (
        <>

            <div class="modal-dialog" >
                <div class="modal-content" >
                    <div class="modal-header" >
                        <h3 >Register Form</h3>
                    </div>
                    <div class="modal-body">
                        <div class="col-xs-12">
                            <label for="ex3">Cunsumer Nub</label>
                            <input
                                class="form-control"
                                id="ex3"
                                type="number"
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
                            <label for="ex3">Type</label>

                            <Select class="form-control" value={data} name="data" onChange={(e) => handleChanges(e)} styles={{ 'width': '70px' }} options={con} getOptionLabel={(option) => option.connection_type} getOptionValue={option => option.id} />

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
                                type="email"
                                name="email"
                                required
                                value={post?.email}
                                onChange={(e) => handleChange(e)}
                            />
                            <p className='text-danger'>
                                {simpleValidator.current.message('email', post?.email, 'required')}
                            </p>
                        </div>
                        <div class="col-xs-12">
                            <label for="ex3">Password</label>
                            <input
                                class="form-control"
                                id="ex3"
                                type="text"
                                name="password"
                                required
                                value={post?.password}
                                onChange={(e) => handleChange(e)}
                            />
                            <p className='text-danger'>
                                {simpleValidator.current.message('password', post?.password, 'required')}
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
                                {simpleValidator.current.message('mobile', post?.mobile, 'required')}
                            </p>
                        </div>
                        <div class="col-xs-12">
                            <label for="ex3">Door No</label>
                            <input
                                class="form-control"
                                id="ex3"
                                type="number"
                                name="Door_No"
                                required
                                value={post?.Door_No}
                                onChange={(e) => handleChange(e)}
                            />
                            <p className='text-danger'>
                                {simpleValidator.current.message('door no', post?.Door_No, 'required')}
                            </p>

                        </div>



                        <div class="col-xs-12">
                            <label for="ex3">Pincode</label>
                            <input
                                class="form-control"
                                id="ex3"
                                type="number"
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
                                {simpleValidator.current.message('address', post?.address, 'required')}
                            </p>

                        </div>


                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-default"
                            style={{ "background-color": "green", color: "white", margin: 'auto' }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Register
