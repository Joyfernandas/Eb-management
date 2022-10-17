import React, { useState } from 'react'
import Topbar from '../Layouts/Topbar'
import '../Style/Dashboard.css'
import axios from 'axios'
import { useEffect } from 'react'

function Dashboard() {
    const [data, setData] = useState({});
    const [input, setInput] = useState({});
    const [con, setCon] = useState({});
    const [put, setput] = useState({})
    console.log(data.length)
    console.log(input.length)
    console.log(con.length)
    console.log(put.length)


    useEffect(() => {
        axios.get("api/Employee/").then((response) => {
            setData(response.data);
        });
        axios.get("api/Customer/").then((response) => {
            setInput(response.data);
        });
        axios.get("api/Unitper_amount/").then((response) => {
            setCon(response.data);
        });
        axios.get("api/Payment/").then((response) => {
            setput(response.data);
        });




    }, []);

    return (
        <>
            <Topbar />

            <div id="root">
                <div class="container pt-5">
                    <div class="row align-items-stretch">
                        <div class="c-dashboardInfo col-lg-3 col-md-6">
                            <div class="wrap">
                                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Number of employee<svg
                                    class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                                    </path>
                                </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">{data.length}</span>
                            </div>
                        </div>
                        <div class="c-dashboardInfo col-lg-3 col-md-6">
                            <div class="wrap">
                                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Number of customer<svg
                                    class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                                    </path>
                                </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">{input.length}</span><span
                                    class="hind-font caption-12 c-dashboardInfo__subInfo"></span>
                            </div>
                        </div>
                        <div class="c-dashboardInfo col-lg-3 col-md-6">
                            <div class="wrap">
                                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Connection<svg
                                    class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                                    </path>
                                </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">{con.length}</span>

                            </div>
                        </div>
                        <div class="c-dashboardInfo col-lg-3 col-md-6">
                            <div class="wrap">
                                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total No Payment <svg
                                    class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                                    </path>
                                </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">{put.length}
                                    <h3></h3></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
