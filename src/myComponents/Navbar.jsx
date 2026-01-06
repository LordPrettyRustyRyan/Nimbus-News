import React from 'react'

export default function Navbar() {
    return (
        <div>
            {/* NAV BAR */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container flex-lg-column">
                    <a className="navbar-brand mx-lg-auto mb-lg-4" href="#">
                        <span className="fw-bold h3 d-block d-lg-none">Nimbus News</span>
                        <img src="portfolio.png" className="d-none d-lg-block rounded-circle profilepic" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
                            <li className="nav-item my-2">
                                <a aria-current="page" href="#home">HOME</a>
                            </li>
                            <li className="nav-item my-2">
                                <a aria-current="page" href="#general">GENERAL</a>
                            </li>
                            <li className="nav-item my-2">
                                <a aria-current="page" href="#business">BUSINESS</a>
                            </li>
                            <li className="nav-item my-2">
                                <a aria-current="page" href="#sports">SPORTS</a>
                            </li>
                            <li className="nav-item my-2">
                                <a aria-current="page" href="#technology">TECHNOLOGY</a>
                            </li>
                            <li className="nav-item my-2">
                                <a aria-current="page" href="#science">SCIENCE</a>
                            </li>
                            <li className="nav-item my-2">
                                <a aria-current="page" href="#health">HEALTH</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
