import React from 'react'
import { useAuth } from "./contexts/AuthContext"
import './cssfiles/Header.css'
import { Link, useHistory } from "react-router-dom"
import logo from "./images/logo.png"

import { Navbar, NavbarBrand, NavbarText, Button } from 'reactstrap';

function Header(props) {
    const { logout } = useAuth()

    return (
        <Navbar color="light" light expand="md" className='w-100 col-15' >
            <NavbarBrand href="/"><img src={logo} alt="Logo" style={{ width: 60, height: 'auto' }} /></NavbarBrand>
            {/* <NavbarToggler /> */}
            {/* <Collapse navbar> */}
            {/* <Nav className="mr-auto" navbar >
                    <NavItem className='header__input'>
                        <SearchIcon color="primary" />
                        <input placeholder="Search Plan" type="text" />
                    </NavItem>
                </Nav> */}
            <NavbarText style={{ color: 'black', fontSize: 16 }} >Eventify</NavbarText>
            <NavbarText className='ml-auto' >
                <Button outline color="danger" onClick={logout} ><Link to={'/'} >Logout</Link></Button>
            </NavbarText>
            {/* </Collapse> */}
        </Navbar>
        // <div className="header" style={{ width: '100%' }} >
        //     <div class="header__left">
        //         <img src={logo} alt="Logo" />
        //         <div class="header__input">
        //             <SearchIcon color="primary" />
        //             <input placeholder="Search Plan" type="text" />
        //         </div>
        //     </div>
        //     <div class="header__center">

        //     </div>

        //     <div class="header__right"></div>
        //     <div class="header__info">
        //         

        //     </div>

        // </div>
    )
}

export default Header;
