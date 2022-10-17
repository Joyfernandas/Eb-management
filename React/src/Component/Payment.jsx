import React from 'react'
import { useState } from 'react';
import Topbar from '../Layouts/Topbar'
import axios from 'axios';
import { useEffect } from 'react';

function Payment() {

    const [input, setInput] = useState([])

    useEffect(() => {
        getvalue()

    }, []);


    const getvalue = () => {
        axios.get("api/Payment/").then((response) => {
            setInput(response.data);
        });
    }
    return (
        <>
            <Topbar />
            <h3 style={{ 'textAlign': 'center', 'fontFamily': "cursive" }}>Payment details</h3>
            <div class="container" style={{ 'margin-top': '50px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Payment Date</th>
                            <th>Payment time</th>


                        </tr>
                    </thead>
                    <tbody>
                        {input?.map((res) => {
                            console.log("payment+++++++++++", res)
                            return (
                                <tr>
                                    <td>{res?.customer
                                    }</td>
                                    <td>{res.email}</td>
                                    <td>{res.pay_date}</td>
                                    <td>{res.pay_time}</td>


                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>



        </>
    )
}

export default Payment
