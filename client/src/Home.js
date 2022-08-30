import React from "react";
import mills_intro from "./Backdrop.jpeg";

function Home() {
  return (
    <div className="home">
      <h1 className="max_head">MAX MILLSTEIN</h1>
      <img src={mills_intro} />
      <div className="button_hold">
        <button>something</button>
        <button>something else</button>
      </div>
    </div>
  );
}

export default Home;
