import React, { useRef } from "react";
import mills_intro from "./Backdrop.jpeg";
import Navbar from "./Navbar";

function Home() {
  const top = useRef(null);
  const top2 = useRef(null);

  function open(ref) {
    ref.current.className = "clapper-open";
  }
  function close(ref) {
    ref.current.className = "clapper-close";
  }
  return (
    <div className="home">
      <Navbar />
      <h1 className="max_head">MAX MILLSTEIN</h1>
      <img src={mills_intro} />
      {/* <div className="button_hold">
        <div class='clapper'>
          <div ref={top}></div>
          <div></div>
          <button>something</button>
        </div>
        <div onMouseEnter={()=>open(top2)} onMouseLeave={()=>close(top2)} class='clapper'>
          <div ref={top2}></div>
          <div></div>
          <button>something else</button>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
