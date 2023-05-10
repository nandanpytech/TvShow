import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
export default function Home() {
  const [showdata, setShowData] = useState([]);
  useEffect(() => {
    const fetchdetails = async () => {
      const showDetils = await fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      const showDetailsJson = await showDetils.json();
      setShowData(showDetailsJson);
    };
    fetchdetails();
  }, []);
  console.log(showdata);
  return (
    <>
      <div className="container">
        <div className="header d-flex flex-lg-row flex-column justify-content-between" >
          <h2 className="mt-4 mb-4">TV Shows</h2>
          <form className="d-flex col-sm-6 align-self-center mb-4 mb-md-0" style={{height:"fit-content"}} role="search">
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

        <div className="row justify-content-lg-between justify-content-md-around justify-content-center">
          {showdata.map((showItem, index) => {
            const show = showItem.show;
            const { image, name, language, genres } = show;
            return (
              <div key={index} class="card mb-4" style={{ width: "16rem" }}>
                <img
                  src={image?.medium}
                  class="card-img-top"
                  alt="No Image Found"
                />
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <div className="details d-flex justify-content-between">
                    <p class="card-text">{language}</p>
                    <CircleRoundedIcon sx={{ width: "7px" }} />
                    <p class="card-text">{genres && genres[0]}</p>
                    {genres[1] && <CircleRoundedIcon sx={{ width: "7px" }} />}
                    <p class="card-text">{genres && genres[1]}</p>
                  </div>

                  <Link to={`/show/${index}`} class="btn btn-outline-primary ">
                    More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
