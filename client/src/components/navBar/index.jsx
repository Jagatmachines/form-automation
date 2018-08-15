import * as React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                <label className="navbar-brand col text-center form-control-plaintext" href='#'>
                CREDIT COMMITTEEE HIRE-PURCHASE LOAN APPROVAL FORM
                </label>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                    {/* <a className="nav-link" href="#">Sign out</a> */}
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;