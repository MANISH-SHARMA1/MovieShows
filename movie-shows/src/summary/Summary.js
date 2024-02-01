import React, { useEffect, useState } from "react";
import "./Summary.css";
import MovieForm from "../movieForm/MovieForm";
function Summary({ prop }) {
  const [data, setData] = useState([]);
  const [resultt, setResult] = useState({});
  const [ticket, setTicket] = useState(false);

  // FETCH DATA ON PROP/ID CHANGE OR ON CLICKING DIFFERENT MOVIE CARD
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const result = await response.json();
        setData(result);

        // SET DATA OF THE CURRENT ID/PROP OR SELECTED MOVIE
        data.map((data) => {
          if (data.show.id == prop) {
            setResult(data.show);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [prop]);

  return (
    <>
      {" "}
      {/* ON CLICKING MOVIE TICKET MOVIE FORM OPEN UP OTHERWISE IT'LL SHOW MOVIE INFORMATION */}
      {ticket ? (
        <MovieForm movieInfo={resultt} setFalse={() => setTicket(!ticket)} />
      ) : (
        <div>
          <div id="name">{resultt.name}</div>
          <div className="summarySection">
            <div className="imgSection">
              {/* CHECK IF IMAGE IS PRESENT OR NOT */}
              {resultt.image == null ? (
                <img id="img" src="https://placehold.co/250x300" alt="img" />
              ) : (
                <img id="img" src={resultt.image.original} alt={resultt.name} />
              )}
            </div>
            <div className="infoCard">
              <h3 className="infoHeading">Information</h3>
              <div className="infoBody">
                <p>
                  <span>Status: </span>
                  {resultt.status}
                </p>
                <p>
                  <span>Show Type: </span>
                  {resultt.type}
                </p>
                <p>
                  <span>Episodes ordered: </span>
                  {resultt.weight} episodes
                </p>
                <p>
                  <span>Developed by: </span>
                  {resultt.name}
                </p>
                <p>
                  <span>Official Site: </span>{" "}
                  <a href={resultt.officialSite} target="_blank">
                    {resultt.officialSite}
                  </a>
                </p>
              </div>
              <button id="ticketBtn" onClick={() => setTicket(true)}>
                Book Ticket
              </button>
            </div>
          </div>
          <div className="summary">{resultt.summary}</div>
        </div>
      )}
    </>
  );
}

export default Summary;
