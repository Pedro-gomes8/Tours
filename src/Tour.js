import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price, func } = props;
  const [readMore, setreadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">R${price}</h4>
        </div>
        {readMore ? (
          <p>
            {info}
            <button onClick={() => setreadMore(false)}>Show less</button>
          </p>
        ) : (
          <p>
            {info.slice(0, 250)}...
            <button onClick={() => setreadMore(true)}>read more</button>
          </p>
        )}

        <button className="delete-btn" onClick={() => func(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
