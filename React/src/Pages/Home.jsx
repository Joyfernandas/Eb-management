import React from 'react'
import { Link } from 'react-router-dom'
import { BsPersonFill } from 'react-icons/bs';

export default function Home() {
    return (
        <>
            <div id="topbar">
                <p style={{ 'float': 'right', 'color': 'white', 'margin-right': '22px' }}>Email:tneb@gmail.com</p>

            </div>

            <div className='image'>

                <img className='center' src="https://www.logolynx.com/images/logolynx/49/49b4f4408a48c131c1a9ce2074503f62.png" alt="BigCo Inc. logo" />
                <h6 className='head'>TAMILNADU ELECTRICITY BOARD LIMITED</h6>
            </div>

            <div id="topbars">
                {/* <div className='icorn' >
                    <Link to="/login" style={{ "color": "white", 'text-decoration': 'none' }}>
                        <BsPersonFill />
                        <h5 style={{ 'color': 'white', 'fontSize': '10px', 'margin-top': '-6px' }}>Admin</h5>
                    </Link>
                </div> */}
                <Link to='/login' style={{ "color": "white", 'text-decoration': 'none', 'fontFamily': 'initial', 'float': 'right', 'margin-top': '15px', 'margin-right': '30px', 'font-weight': 'bold' }}>Login</Link>
                <Link to='/register' style={{ "color": "white", 'text-decoration': 'none', 'fontFamily': 'initial', 'float': 'right', 'margin-top': '15px', 'margin-right': '30px', 'font-weight': 'bold' }}>Register</Link>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img className='img2' style={{ 'width': '350px', 'margin': 'auto', 'margin-top': '30px', 'margin-left': '30px' }} src="https://www.tnebltd.gov.in/images/tnebbuilding.gif" alt="BigCo Inc. logo" />
                    </div>
                    <div class="col-sm">
                        <div className='title1'>
                            <h5 style={{ 'color': 'white', 'background-color': 'rgb(75, 189, 255)', 'margin-top': '10px', 'max-width': 'max-content', 'padding': '5px', 'margin-left': '40px' }}>CORPORATE PROFILE</h5>
                            <p >On 1st July 1957, Tamil Nadu Electricity Board came into being and has remained the energy provider and distributor all these years. After 53 years of journey the Tamil Nadu Electricity Board was restructured as per G.O.114 dated 08.10.2008 by establishing a holding company with the name "TNEB Ltd" and two subsidiary companies namely "Tamil Nadu Transmission Corporation Ltd.,"(TANTRANSCO) and "Tamil Nadu Generation and Distribution Corporation Ltd.," </p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className='title1'>
                            <h5 style={{ 'color': 'white', 'background-color': 'rgb(240, 106, 106)', 'margin-top': '10px', 'max-width': 'max-content', 'padding': '5px', 'margin-left': '30px' }}>TANGEDCO</h5>
                            <h5 style={{ 'color': 'white', 'background-color': 'rgb(240, 106, 106)', 'margin-top': '-35px', 'max-width': 'max-content', 'padding': '5px', 'margin-left': '170px' }}>TANGTRANSCO</h5>
                            <div class="card" >
                                <h1 className='news' style={{ 'margin-top': '-10px' }}>Latest News
                                </h1>

                                <div class="scroller">
                                    <span>
                                        TANGEDCO celebrates the National Energy Conservation Day on December 14th and Energy Conservation Week from December 14th to December 20th<br />
                                        <br />
                                        GO-79 - Collection of Cross subsidy surcharge from HT consumers for the power purchase from outside sources

                                    </span>
                                </div>

                                <p class="note">
                                    Updataed News

                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <footer class="page-footer font-small blue">


                <div class="footer">
                    <h5 className='heading2'>© 2020 Copyright:
                        Suriyaprakash</h5>
                </div>


            </footer>


        </>
    )
}
