import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function App() {
  return (
    <>
      <h1 className="heading_style">Youtube Top 3 News channel</h1>

      {Sdata.map((val, index) => {
        return (
          <Card
            imgsec={val.imgsec}
            title={val.title}
            name={val.name}
            links={val.links}
          />
        );
      })}
    </>
  );
}

export default App;
