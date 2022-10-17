import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slidebar from "../Layouts/Slidebar";
import Swal from "sweetalert2";

function Customerpage() {

    const { id } = useParams()


    const [get, setGet] = useState([]);
    console.log("________________", get);


    const [data, setdata] = useState([]);
    console.log("==========", data)

    const handleinput = (e) => {
        setdata({
            ...data, [e.target.name]: e.target
                .value
        })
    }
    useEffect(() => {
        getvalue()
    }, []);

    const getvalue = () => {
        axios.get(`api/Unit/${id}/`)
            .then((response) => {
                setGet(response.data);
            })
            .catch((err) => {
                console.log("error", err)
            })


    }


    const onsubmit = () => {
        axios.post("api/Payment/", data)
            .then((response) => {
                console.log(response);
                Swal.fire(
                    'Success!',
                    'Payment Success!',
                    'success'
                )
            })
            .catch((err) => {
                console.log("error", err)
            })
    }

    return (
        <>
            <Slidebar />
            <div class="container" style={{ 'margin-top': '50px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Consumed</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Month</th>
                            <th>Total Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{get.customer}</td>
                            <td>{get.unit_consumed
                            }</td>
                            <td>{get.start_date}</td>
                            <td>{get.end_date}</td>
                            <td>{get.month}</td>
                            <td>{get.amount}</td>

                            <button
                                type="button"
                                style={{ "margin-top": "10px" }}
                                class="btn btn-info btn-lg"
                                data-toggle="modal"
                                data-target="#myModal"
                            >
                                Pay
                            </button>

                            <div class="modal fade" id="myModal" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3>Payment </h3>
                                            <button type="button" class="close" data-dismiss="modal">
                                                &times;
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="col-xs-12">
                                                <label for="ex3">Name</label>
                                                <input
                                                    class="form-control"
                                                    id="ex3"
                                                    type="text"
                                                    name="customer"
                                                    required
                                                    value={get?.customer}
                                                    onChange={handleinput}

                                                />

                                            </div>
                                            <div class="col-xs-12">
                                                <label for="ex3">Email</label>
                                                <input
                                                    class="form-control"
                                                    id="ex3"
                                                    type="email"
                                                    name="email"
                                                    required
                                                    onChange={handleinput}

                                                />

                                            </div>
                                            <div class="col-xs-12">
                                                <label for="ex3">Pay Date</label>
                                                <input
                                                    class="form-control"
                                                    id="ex3"
                                                    type="date"
                                                    name="pay_date"
                                                    required
                                                    onChange={handleinput}
                                                />

                                            </div>

                                            <div class="col-xs-12">
                                                <label for="ex3">Pay time</label>
                                                <input
                                                    class="form-control"
                                                    id="ex3"
                                                    type="time"
                                                    name="pay_time"
                                                    required
                                                    onChange={handleinput}
                                                />

                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button
                                                type="button"
                                                class="btn btn-default"
                                                style={{ "background-color": "green", color: "white" }}
                                                onClick={onsubmit}
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

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Customerpage
