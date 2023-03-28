import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navvbar-expand-lg bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">{"TODO APP"}</a>
                <ul className="d-flex">
                    <li className="nav-item">
                        <button className="btn btn-warning me-2">
                            <Link className="active me-3 navbar-brand" to="/">Home</Link>
                        </button >
                        </li>
                        <li className="nav-item">
                        <button className="btn btn-warning me-2">
                            <Link className="active me-3 navbar-brand" to="/login">Login</Link>
                        </button>
                        </li> 
                        <li className="nav-item">
                        <button className="btn btn-warning">
                            <Link className="active me-3 navbar-brand" to="/sign-up">Sign-up</Link>
                        </button>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;