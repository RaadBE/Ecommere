import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navphonec.css'
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon
} from 'mdb-react-ui-kit';

function PhoneNav() {
    const [showNavExternal, setShowNavExternal] = useState(false);

    return (
        <>
            <MDBNavbar>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarToggleExternalContent'
                        aria-controls='navbarToggleExternalContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavExternal(!showNavExternal)}
                        style={{
                            height: '30px',
                            color: 'white',
                            backgroundColor: 'black',
                            border: 'none'
                        }}
                    >
                        <MDBIcon icon='bars' fas />
                        <span className="">≡</span>
                    </MDBNavbarToggler>
                </MDBContainer>
            </MDBNavbar>

            <MDBCollapse show={showNavExternal}>
                <div className='bg-light shadow-3 p-4'>
                    <Link className='btn btn-link border-bottom m-0 d-block' to="/">Home</Link>
                    <Link className='btn btn-link border-bottom m-0 d-block' to="/collection">Collection</Link>
                    <Link className='btn btn-link border-bottom m-0 d-block' to="/about">About</Link>
                    <Link className='btn btn-link border-bottom m-0 d-block' to="/contact">Contact</Link>
                    <Link className='btn btn-link border-bottom m-0 d-block text-hover' to="/cart">Cart</Link>
                </div>
            </MDBCollapse>
        </>
    );
}

export default PhoneNav;
