import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((tours) => {
        settours(tours);
        setloading(false);
      });
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours to show</h2>
          <div className="underline"></div>
          <button
            className="btn"
            onClick={() => {
              fetch(url)
                .then((response) => response.json())
                .then((tours) => {
                  settours(tours);
                });
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} func={removeTour} />
    </main>
  );
}

export default App;
