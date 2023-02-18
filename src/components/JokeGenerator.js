import React, { useEffect, useState } from "react";
import "./sass/Joke.scss";
import axios from "axios";

export default function JokeGenerator() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.blablagues.net/?rub=blagues")
      .then((res) => {
        setJoke(res.data.data.content);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="joke-bubble">
      <div className="joke-content">
        {loading ? (
          <>🌳 Vois-tu ce bel olivier ?</>
        ) : (
          <>
            😶‍🌫️ Blague du jour&nbsp;:
            <br />
            <em style={{ paddingTop: "10px" }}>
              {joke.text_head}
              <br />
              {joke.text} {joke.text_hidden}
            </em>
          </>
        )}
      </div>
    </div>
  );
}
