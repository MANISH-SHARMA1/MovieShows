import { useEffect, useState } from "react";
import "./App.css";
import Summary from "./summary/Summary";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("42181");

  // FETCH DATA ON LOAD
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* NAVBAR */}
      <div className="nav">
        <h1>Book Movies</h1>
      </div>

      {/* BODY */}
      <div className="movie">
        {/* MOVIE LIST ON LEFT HAND SIDE */}
        <div className="movie-list">
          <div id="name">Movies List</div>
          {data.map((movie, index) => (
            <>
            {/* CHECK IF IMAGE IS PRESENT OR NOT */}
              {movie.show.image === null ? (
                <div
                  className="card"
                  key={index}
                  onClick={() => setId(movie.show.id)}
                >
                  <img id="imgg" src="https://placehold.co/250x300" alt="img" />
                  <h3>{movie.show.name}</h3>
                  <div className="info">
                    <p>{movie.show.language}</p>
                    <p>Rating {movie.show.rating.average}</p>
                  </div>
                </div>
              ) : (
                <div
                  className="card"
                  key={index}
                  onClick={() => setId(movie.show.id)}
                >
                  <img id="imgg" src={movie.show.image.original} alt="img" />
                  <h3>{movie.show.name}</h3>
                  <div className="info">
                    <p>{movie.show.language}</p>
                    <p>Rating {movie.show.rating.average}</p>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        {/* MOVIE DETAILS/SUMMARY ON RIGHT HAND SIDE */}
        <div className="movie-summary">
          <Summary prop={id} />
        </div>
      </div>
    </>
  );
}

export default App;
