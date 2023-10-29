import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/">VIJAY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/todo">Todo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/weather">Weather</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">ChatApp</Link>
                            </li>
                            <div className="mx-3">
                                <button type="button" className="btn1 mx-2">Login</button>
                                <button type="button" className="btn2 mx-2">Sign Up</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar