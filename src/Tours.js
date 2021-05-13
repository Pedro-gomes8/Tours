import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, func }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} func={func} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
