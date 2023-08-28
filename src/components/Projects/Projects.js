import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nefps from "../../Assets/Projects/nefps.png";
import basketball from "../../Assets/Projects/basketball.gif";
import roguelike from "../../Assets/Projects/roguelike.png";
import fabrika from "../../Assets/Projects/fabrika.png";
import koltuk from "../../Assets/Projects/koltuk.png";
import mantar from "../../Assets/Projects/mantar.png";
import fog from "../../Assets/Projects/fog.png";
import gun from "../../Assets/Projects/Gun.jpeg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gun}
              isBlog={false}
              title="Hyper-Casual Runner"
              description="A runner game where you escaped from a wizard and have to run away from him and advance levels. Made with Unity. It is in internal testing right now. If you wish to know more, heres a blog about it:"
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              ghLink="https://play.google.com/apps/internaltest/4701178448089327823"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roguelike}
              isBlog={false}
              title="Hyper-Casual Roguelike."
              description="This was a freelance for me. Main theme was 'risk of rain but in hyper-casual' I had a blast making this game. There were 54 items to make and every one of them needed different mechanic. Made with Unity."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              ghLink="https://www.youtube.com/watch?v=iTngSOvC0SI&ab_channel=EmirhanPortakal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nefps}
              isBlog={false}
              title="NEFPS"
              description="Using 'Non Euclidean Geometry' in a videogame was a crazy idea but I made that work and made it an fps/puzzle game. I made a smooth portal mechanic in this game and used that to get the Non Euclidean effect on my puzzles, portal gun and most importantly between rooms. You have to find the portals to another worlds in this game to proceed."
              ghLink="https://github.com/EmirhanPortakal/Non-Euclidean-FPS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fabrika}
              isBlog={false}
              title="Factory"
              description="Workshop I designed for Egerobot. I learned a lot about shading and lightmapping, how to shorten the time, how to get better lights, etc. Also learned about UV unwrapping and its hindrances. I made this for a cross platform game-like app for Occupational Health And Safety."
              ghLink="https://github.com/EmirhanPortakal/egerobot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={koltuk}
              isBlog={false}
              title="Sofa"
              description="Sofa model I made for ModaLife. Usually I work with lowpoly but this time I've been asked for more realistic model."
              ghLink="https://skfb.ly/oH7yy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mantar}
              isBlog={false}
              title="Mushroom House"
              description="Cute low poly house I made. A mushroom witch lives inside it."
              ghLink="https://skfb.ly/oGIBL"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fog}
              isBlog={false}
              title="Froge"
              description="Froge I made when I first started blender."
              ghLink="https://skfb.ly/oy7WW"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basketball}
              isBlog={false}
              title="Basketball Game"
              description="Basketball game mechanic I made for Lecten. They used it on their game 'dunkball' Made with Unreal Engine." 
              ghLink="https://github.com/EmirhanPortakal/BasketballypcerCasual"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
