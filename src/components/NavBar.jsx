import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand order-sm-0" href="/">
            MovieTime
          </a>

          <form className="d-flex col-sm-6 " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{maxWidth:"max-content"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-md-5" style={{gap:"2rem"}}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Contact Us
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
