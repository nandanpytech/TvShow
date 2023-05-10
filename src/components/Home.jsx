import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
        <h2 className="mt-4 mb-4">TV Shows</h2>
        <div className="row justify-content-lg-between justify-content-md-around justify-content-center">
        {showdata.map((showItem, index) => {
          const show = showItem.show;
          const {image, name, language, genres } = show;
          return (
              <div key={index} class="card mb-4" style={{ width: "16rem" }}>
                <img src={image?.medium} class="card-img-top" alt="No Image Found" />
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <div className="details d-flex justify-content-between">
                  <p class="card-text">
                    {language}
                   </p>
                  <p class="card-text">
                    {genres && genres[0]}
                   </p>
                  <p class="card-text">
                    {genres && genres[1]}
                   </p>
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
