import Topbar from "../Layouts/Topbar";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Select from 'react-select'
import SimpleReactValidator from 'simple-react-validator';
import { useRef } from "react";
import Swal from "sweetalert2";

function Units() {
    const [get, setGet] = useState([]);
    const [input, setIput] = useState({});
    console.log(input)
    const [data, setdata] = useState([]);
    console.log("+++++++++++++++++", data)
    const [unit, setUnit] = useState([])
    const [con, setCon] = useState({})
    const [drop, setDrop] = useState({})
    console.log('drop', drop)
    const simpleValidator = useRef(new SimpleReactValidator())
    const [, setForceUpdate] = useState()



    useEffect(() => {
        getvalue()
    }, []);

    const getvalue = () => {
        axios.get("api/Unit/").then((response) => {
            setGet(response.data);
        });

        axios.get("api/Customer/").then((response) => {
            setIput(response.data);
        });

        axios.get("api/Unitper_amount/").then((response) => {
            setdata(response.data);
        });

    }

    const handleChange = (e) => {
        var amt = drop?.amount
        setDrop({ ...drop, [e.target.name]: e.target.value, suri: amt * e.target.value })
        // setDrop({ ...drop, [e.target.name]: e.target.value });
    };

    const handleChanges = (e, name) => {
        if (name) {
            setDrop({ ...drop, name: name, e: e })
        }
    };

    const handleChangess = (e, name) => {
        // if (name) {
        //     setDrop({ ...drop, name: name, e: e })
        let amount = data?.filter(i => i.id == +e?.target?.value)
        setDrop({ ...drop, [e.target.name]: e.target.value, amount: amount?.[0]?.amount })


    };


    const handleSubmit = () => {
        if (simpleValidator.current.allValid()) {
            let temp = drop
            console.log(temp)
            temp["customer"] = temp.e.id
            temp["amount"] = temp.suri
            console.log('temp: ', temp);
            axios.post("api/Unit/", temp)
                .then((response) => {
                    console.log('response: ', response);
                    setUnit(response.data)
                    getvalue()
                }).catch(err => {
                    console.log('err: ', err);

                })
        }
        else {
            simpleValidator.current.showMessages();
            setForceUpdate(1)
            Swal.fire(
                'Please Fill!',
                'Please enter the employee details!',
                'error'
            )
        }
    }


    const handleDelete = (id) => {
        axios.delete(`api/Unit/${id}/`)
            .then(() => {
                getvalue()
            })
    };


    return (
        <>
            <Topbar />
            <h3 style={{ 'textAlign': 'center', 'fontFamily': "cursive" }}>Unit details</h3>

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
                                    <label for="ex3">Name</label>

                                    <Select name='customer' onChange={(e) => handleChanges(e, 'customer')} options={input} getOptionLabel={(option) => option.name} getOptionValue={option => option.id} />

                                </div>

                                <div class="col-xs-12">
                                    <label for="ex3">Unit Type</label>

                                    <select class="form-control" name="type" onChange={(e) => handleChangess(e)}>
                                        <option>
                                            --Selct--
                                        </option>
                                        {data?.map((item) => {
                                            console.log(',,,,,,,,,', item)

                                            return (
                                                <option value={item.id} >
                                                    {item.connection}
                                                </option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <div class="col-xs-12">
                                    <label for="ex3">Unit Amount</label>
                                    <input
                                        class="form-control"
                                        id="ex3"
                                        type="text"
                                        name="start_date"
                                        required
                                        value={drop?.amount}
                                    />
                                </div>
                                <div class="col-xs-12">
                                    <label for="ex3">Start Date</label>
                                    <input
                                        class="form-control"
                                        id="ex3"
                                        type="date"
                                        name="start_date"
                                        required
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                <div class="col-xs-12">
                                    <label for="ex3">End Date</label>
                                    <input
                                        class="form-control"
                                        id="ex3"
                                        type="date"
                                        name="end_date"
                                        required
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div class="col-xs-12">
                                    <label for="ex3">Month</label>
                                    <input
                                        class="form-control"
                                        id="ex3"
                                        type="text"
                                        name="month"
                                        required
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div class="col-xs-12">
                                    <label for="ex3">Unit Consumed</label>
                                    <input
                                        class="form-control"
                                        id="ex3"
                                        type="text"
                                        name="unit_consumed"
                                        required
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div class="col-xs-12">
                                    <label for="ex3">Amount</label>
                                    <input
                                        class="form-control"
                                        id="ex3"
                                        type="number"
                                        name="amount"
                                        required
                                        defaultValue={1}
                                        value={drop?.suri}
                                        onChange={(e) => handleChange(e)}

                                    />
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

            {/* button end */}

            <div class="container">
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
                        {get.map((res) => {
                            return (
                                <tr>
                                    <td>{res.customer}</td>
                                    <td>{res.unit_consumed}</td>

                                    <td>{res.start_date}</td>
                                    <td>{res.end_date}</td>
                                    <td>{res.month}</td>
                                    <td>{res.amount}</td>
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



export default Units;