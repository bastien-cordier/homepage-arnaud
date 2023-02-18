import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import "./sass/FormAdd.scss";

export default function FormAdd() {
  const [siteData, setSiteData] = useState([]);
  const [url, setUrl] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8000/links")
      .then((res) => setSiteData(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/links", {
        url,
        website,
      })
      .then(() => {
        setError(false);
        setUrl("");
        setWebsite("");
        getData();
        Swal.fire({
          icon: "success",
          text: "Votre site a bien été ajouté 🎉",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload(false);
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          text: "Une erreur s'est produite 💩",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="Entre ton URL"
        value={url}
      />
      <input
        onChange={(e) => setWebsite(e.target.value)}
        type="text"
        placeholder="Entre le nom de ton site"
        value={website}
      />
      <button type="submit" value="Envoyer">
        Ajouter
      </button>
    </form>
  );
}
