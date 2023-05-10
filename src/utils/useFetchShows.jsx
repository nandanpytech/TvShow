import React, { useEffect, useState } from "react";

export default function useFetchShows() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdetails = async () => {
      const showDetils = await fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      const showDetailsJson = await showDetils.json();
      setData(showDetailsJson);
    };
    fetchdetails();
  },[]);

  return {data};
}
