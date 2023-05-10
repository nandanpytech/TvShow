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
        </div>
      </nav>
    </>
  );
}
