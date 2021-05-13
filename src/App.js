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
  fetch(url).then((tour) => {
    <Tour {...tour} />;
  });

  return <>{loading ? <Loading /> : <Tours />}</>;
}

export default App;
