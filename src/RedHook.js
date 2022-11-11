import React from "react";
import redhooktitle from "./redhook-title.png";
import smoking from "./smoking.png";
import still1 from "./still1.png";
import still2 from "./still2.png";
import still3 from "./still3.png";
import still4 from "./still4.png";
import still5 from "./still5.png";
import still6 from "./still6.png";
import still7 from "./still7.png";
import still8 from "./still8.png";
import still9 from "./still9.png";
import still10 from "./still10.png";
import still11 from "./still11.png";
import still12 from "./still12.png";
import still13 from "./still13.png";
import redhookpost from "./redhookposter.png";

function RedHook() {
  return (
    <div className="redhook">
      <img className="redhook_title_img" src={redhooktitle} alt="Red Hook" />
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/758069571?h=14975cae08"
        width="640"
        height="268"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h4 className="redhook_desc">
        After suddenly abandoning a world tour, rockstar Andrew Lane is now
        faced with the toughest choice of his life when he runs into the one
        person who can help or hurt him.
      </h4>
      {/* <h1>DIRECTORS STATEMENT</h1>
      <p>
        A fascination with meeting my girlfriend's long term ex boyfriend lead
        me to the question-- what if I ran into him? What if we sat down, and
        had a conversation? What would I learn? I know this man's most intimate
        secrets-- what a strange dynamic...
        <br />
        <br /> And what an excellent place to explore our vulnerabilities. Well,
        my own vulnerabilities--
        <br />
        <br /> As a writer, I'm keenly aware that if you're deeply personal and
        expose yourself, you might have a chance of helping others with your
        words. What's difficult is when your parents/close friends beg to read
        your "diary confessions"... it's petrifying. I can't imagine what it's
        like being a famous musician having to experience this on a massive
        scale. <br />
        <br />
        But when we make the difficult choice to divulge our own insecurities,
        and don't feel the need to constantly put ourselves in the best light,
        we have an opportunity to grow. To move on. To share and revel in our
        vulnerabilities... it's all we can do
      </p> */}
      <div>
        <ul style={{ textAlign: "center", listStyleType: "none" }}>
          <em>
            <li>
              Award Winner (Best Indie Short),{" "}
              <strong>Oniros Film Awards® - New York</strong>, 2022
            </li>
            <li>
              Finalist (Best 1st Time Director),{" "}
              <strong>New York International Film Awards™ - NYIFA</strong>, 2022
            </li>
            <li>
              Award Nominee (Best Original Screenplay),{" "}
              <strong>Cannes Short</strong>, 2022
            </li>
            <li>
              Officially Selected (First Time Director),{" "}
              <strong>Paris Film Awards</strong>, 2022
            </li>
            <li>
              Award Winner (First time Director),{" "}
              <strong>London Movie Awards</strong>, 2022
            </li>
            <li>
              Award Winner (First Time Director),{" "}
              <strong>Milan Gold Awards</strong>, 2022
            </li>
            <li>
              Award Nominee (Best Original Screenplay),{" "}
              <strong>IndieX Film Fest</strong>, 2022
            </li>
            <li>
              Award Nominee (Best Acting Duo), <strong>IndieX Film Fest</strong>
              , 2022
            </li>
            <li>
              Award Winner (Debut Filmmaker of Short Film),{" "}
              <strong>Golden Lion International Film Festival (GLIFF)</strong>,
              2022
            </li>
          </em>
        </ul>
      </div>
      <div className="credits">
        <p>Written and Directed by Max Millstein</p>
        <p>Assistant Director: AC Smallwood </p>
        <p>Director of Photography: Peter Pavlakis</p>
        <p>First Assistant Camera: Alex Swickard</p>
        <p>Gaffer: Chris Tremblay</p>
        <p>Sound: Eamon Redpath</p>
        <p>Editor: Joe Bastien</p>
        <p>Color: Emily Bailey</p>
        <p>Production Assistant: Robyn Haddad</p>
        <p>Production Assistant: Nicholas Vuckovick</p>
      </div>
      <img alt="redhook" className="movie_poster" src={redhookpost} />
      <h1>STILLS</h1>
      <div className="stills-container">
        <img alt="redhook" src={smoking} />
        <img alt="redhook" src={still1} />
        <img alt="redhook" src={still2} />
        <img alt="redhook" src={still3} />
        <img alt="redhook" src={still4} />
        <img alt="redhook" src={still5} />
        <img alt="redhook" src={still6} />
        <img alt="redhook" src={still7} />
        <img alt="redhook" src={still8} />
        <img alt="redhook" src={still9} />
        <img alt="redhook" src={still10} />
        <img alt="redhook" src={still11} />
        <img alt="redhook" src={still12} />
        <img alt="redhook" src={still13} />
      </div>
    </div>
  );
}

export default RedHook;
