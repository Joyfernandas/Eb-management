import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Topbar from '../Layouts/Topbar'
import axios from 'axios';
import Select from 'react-select'
import SimpleReactValidator from 'simple-react-validator';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Connection() {

    const [input, setinput] = useState([]);



    useEffect(() => {
        getvalue()

    }, []);


    const getvalue = () => {
        axios.get("api/Unitper_amount/").then((response) => {
            setinput(response.data);
        });

    }





    return (
        <>
            <Topbar />
            <h3 style={{ 'textAlign': 'center', 'fontFamily': "cursive" }}>Connection deatils</h3>


            <div class="container" style={{ 'margin-top': '80px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Connection Name</th>
                            <th>Unitper Amount</th>
                            <th> Edit</th>


                        </tr>
                    </thead>
                    <tbody>
                        {input.map((res) => {
                            return (
                                <tr>
                                    <td>{res.connection}</td>
                                    <td>{res.amount}</td>
                                    <td>

                                        <Link to={`/form/${res.id}`}>  <button
                                            type="button"
                                            style={{ "margin-top": "10px" }}
                                            class="btn btn-info btn-lg"
                                            data-toggle="modal"

                                            data-target="#myModal"
                                            style={{ 'width': '60px', ' height': '2px', 'margin-left': '-10px', 'margin-top': '-5px' }}

                                        >
                                            Edit
                                        </button>
                                        </Link>



                                    </td>


                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Connection




function ConnectionForm() {

    const { id } = useParams()

    const [get, setGet] = useState([])

    const [input, setInput] = useState([])
    console.log(input)

    const temp = useNavigate()

    useEffect(() => {

        getvalue()
        input && setInput({ ...input, })
    }, []);


    const getvalue = () => {
        axios.get("/api/Connection/").then((response) => {
            setGet(response.data);

        });
        axios.get(`/api/Unitper_amount/${id}/`)
            .then(i => {
                setInput({ ...i.data, connection: { connection_type: i?.data?.connection?.[0], id: i?.data?.id } })
            })

    }

    const handleChanges = (e) => {
        if (e.target.name === "amount") {
            setInput({ ...input, [e.target.name]: e.target.value })

        }
        else { setInput({ ...input, connection: e }); }

    };

    const handleSubmit = (e) => {
        axios.put(`/api/Unitper_amount/${input.id}/`, { connection: input.connection_type, amount: input.amount, })
        Swal.fire(
            'Success!',
            'Data edited successfully!',
            'success'
        )
        temp('/connection')
    }


    return (
        <>
            <Topbar />
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Edit deatils</h3>

                    </div>
                    <div class="modal-body">
                        <div class="col-xs-12">
                            <label for="ex3">Connection Type</label>
                            <Select class="form-control" name="data" value={input?.connection} onChange={(e) => handleChanges(e)} styles={{ 'width': '70px' }} options={get} getOptionLabel={(option) => option.connection_type} getOptionValue={option => option.id} />
                        </div>

                        <div class="col-xs-12">
                            <label for="ex3">Amount</label>
                            <input
                                class="form-control"
                                id="ex3"
                                type="text"
                                name="amount"
                                required
                                value={input?.amount}
                                onChange={handleChanges}


                            />

                        </div>

                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-default"
                            style={{ "background-color": "green", color: "white" }}
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export { ConnectionForm }
