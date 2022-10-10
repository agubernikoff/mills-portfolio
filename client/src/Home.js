import React, { useRef } from "react";
import glacial from "./glacialposter.png";
import redhook from "./redhookposter.png";
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
      {/* <h1 className="max_head">MAX MILLSTEIN</h1> */}
      <div className="poster_holder">
        <div className="item">
          <img src={redhook} className="poster" />
          <span class="caption">OCTOBER 2022</span>
        </div>
        <div className="item">
          <img src={glacial} className="poster" />
          <span class="caption">FEBRUARY 2023</span>
        </div>
      </div>

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
