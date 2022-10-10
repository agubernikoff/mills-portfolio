import React from "react";
import smoking from "./smoking.png";
import frenchd from "./frenchd.jpg";

function RedHook() {
  return (
    <div className="redhook">
      <h2>RED HOOK</h2>
      <img className="smoking_ss" src={smoking} />
      <div className="adjustment-container">
        <h1>VIDEO PREVIEW</h1>
        <h4>
          A rockstar seeking a simpler life unexpectedly encounters his
          girlfriend’s ex boyfriend for the first time, and after it takes an
          emotional turn, realizes he has to choose between his vocation or
          love.
        </h4>
        <h1>DIRECTORS STATEMENT</h1>
        <p>
          A fascination with meeting my girlfriend's long term ex boyfriend lead
          me to the question-- what if I ran into him? What if we sat down, and
          had a conversation? What would I learn? I know this man's most
          intimate secrets-- what a strange dynamic...
          <br />
          <br /> And what an excellent place to explore our vulnerabilities.
          Well, my own vulnerabilities--
          <br />
          <br /> As a writer, I'm keenly aware that if you're deeply personal
          and expose yourself, you might have a chance of helping others with
          your words. What's difficult is when your parents/close friends beg to
          read your "diary confessions"... it's petrifying. I can't imagine what
          it's like being a famous musician having to experience this on a
          massive scale. <br />
          <br />
          But when we make the difficult choice to divulge our own insecurities,
          and don't feel the need to constantly put ourselves in the best light,
          we have an opportunity to grow. To move on. To share and revel in our
          vulnerabilities... it's all we can do
        </p>
        <div className="stills-container">
          <img alt="not the french dispatch" src={frenchd} />
          <img alt="not the french dispatch" src={frenchd} />
          <img alt="not the french dispatch" src={frenchd} />
          <img alt="not the french dispatch" src={frenchd} />
          <img alt="not the french dispatch" src={frenchd} />
          <img alt="not the french dispatch" src={frenchd} />
        </div>
      </div>
    </div>
  );
}

export default RedHook;
