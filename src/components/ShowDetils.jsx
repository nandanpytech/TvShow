import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Snackbar,Alert} from '@mui/material'

export default function ShowDetils() {
  const { id } = useParams();
  const [particularShow, setParticularShow] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    card: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleInput = (value) => (e) => {
    setUserDetails({ ...userDetails, [value]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Name", userDetails.name);
    localStorage.setItem("Email", userDetails.email);
    localStorage.setItem("Mobile", userDetails.mobile);
    localStorage.setItem("Card", userDetails.card);
    setShowToast(!showToast);
  };
  useEffect(() => {
    const fetchdetails = async () => {
      const showDetils = await fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      const showDetailsJson = await showDetils.json();
      setParticularShow(showDetailsJson[id]);
    };
    fetchdetails();
  }, []);
  // console.log(showToast);

  return (
    <>
      <div
        className="container d-flex justify-content-center mt-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="section-1 col-md-4 " style={{ height: "max-content" }}>
            <img
              src={particularShow?.show?.image?.original}
              alt=""
              style={{ width: "100%", objectFit: "contain", height: "100%" }}
            />
          </div>
          <div className="section-2 col-md-8">
            <h2 className="show-title mt-4 mt-md-0">
              {particularShow?.show?.name}
            </h2>
            {/* sub-details  */}
            <div className="sub-details d-flex" style={{ gap: "4rem" }}>
              <p className="text1 ">{particularShow?.show?.language}</p>
              <p className="text1">{particularShow?.show?.genres[0]}</p>
              <p className="text1">{particularShow?.show?.genres[1]}</p>
            </div>

            {/* summary  */}
            <h5 className="summary-title">Summary</h5>
            <p
              className="summary-details"
              dangerouslySetInnerHTML={{
                __html: particularShow?.show?.summary,
              }}
              style={{ textAlign: "justify" }}
            ></p>

            <div className="button mb-4">
              <button
                class="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Show Name: {particularShow?.show?.name}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label">
                      Your Name
                    </label>
                    <input
                      onChange={handleInput("name")}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      onChange={handleInput("email")}
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputMobile" class="form-label">
                      Mobile Number
                    </label>
                    <input
                      onChange={handleInput("mobile")}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputCard" class="form-label">
                      Card Details
                    </label>
                    <input
                      onChange={handleInput("card")}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <Snackbar open={showToast}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000} onClose={()=>setShowToast(!showToast)}>
          <Alert
            onClose={()=>setShowToast(!showToast)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Congrats, Your Ticket is Confirmed!
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
