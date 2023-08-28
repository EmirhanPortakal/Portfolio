import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Emirhan </span>
            from <span className="purple"> Isparta, Turkey.</span>
            <br /> I'm a new grad Computer Engineer that specializes in Game Development.
            <br />
            I am currently looking for job opportunities.
            <br />
            <br />
            Apart from coding, here are some things that excites me!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tabletop Roleplaying Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Artificial Intelligence
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling


              
            </li>

            <p style={{ textAlign: "justify" }}>Foot note: If you are interested in TTRPG like DnD or Cyberpunk, you should visit our clubs instagram page: <a
                  href="https://www.instagram.com/playersofsparta/"
                  target="_blank"
                  rel="noreferrer"
                >Players of Sparta
                </a> </p>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The future is in the skies!"{" "}
          </p>
          <footer className="blockquote-footer">Mustafa Kemal Atatürk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
