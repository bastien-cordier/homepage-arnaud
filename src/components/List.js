import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.js";
import "./sass/List.scss";

export default function List() {
  const [favoris, setFavoris] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/links")
      .then((res) => {
        setFavoris(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="website-container">
      <div className="searchbar">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          className="input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="favoris-container">
        {loading ? (
          <>ça marche pas</>
        ) : (
          <div class="list">
            {favoris
              .filter((site) => {
                if (search === "") {
                  return site;
                } else if (
                  site.website.toLowerCase().includes(search.toLowerCase())
                ) {
                  return site;
                }
              })
              .map((site, i) => (
                <Card key={i} site={site} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
