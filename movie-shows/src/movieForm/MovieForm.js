import React from "react";
import "./MovieForm.css";

function MovieForm({ movieInfo, setFalse }) {
  return (
    <div className="formPage">
      <div className="formTop">
        <h2>Ticket Form</h2>
        {/* ON CLICKING THIS BUTTON FORM GET CLOSE */}
        <button className="clsBtn" onClick={setFalse}>
          X
        </button>
      </div>

      {/* FORM PAGE */}
      <div className="form">
        {/* THIS PART PRESENT MOVIE DETAIL ON FORM PAGE */}
        <div className="leftPart">
          <h2>{movieInfo.name}</h2>
          {/* CHECK IF IMAGE IS PRESENT OR NOT */}
          {movieInfo.image == null ? (
            <img id="image" src="https://placehold.co/250x300" alt="img" />
          ) : (
            <img
              id="image"
              src={movieInfo.image.original}
              alt={movieInfo.name}
            />
          )}
          <div className="bottom">
            <p>Rating {movieInfo.rating.average}</p>
            <p>{movieInfo.runtime} minutes</p>
          </div>
        </div>

        {/* THIS PART PRESENT MOVIE FORM */}
        <div className="rightPart">
          <div className="input">
            <label htmlFor="userName">Your Name:</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>
              <input type="radio" name="group" value="male" />
              Male
            </label>

            <label>
              <input type="radio" name="group" value="female" />
              Female
            </label>

            <label>
              <input type="radio" name="group" value="option3" />
              Other
            </label>
          </div>
          <div className="input bottom">
            <p>
              <span>Price: </span> $10
            </p>
            <button id="bookBtn">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieForm;
