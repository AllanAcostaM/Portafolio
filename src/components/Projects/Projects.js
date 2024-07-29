import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dark from "../../Assets/Projects/CoverFacingMyDarkness.png";
import Virus from "../../Assets/Projects/CoverGlowVirus.png";
import Distress from "../../Assets/Projects/CoverCattleInDistress.png";

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
              imgPath={Virus}
              showGitHub={true}
              isBlog={false}
              title="Glow Virus"
              description="First-person survival game, immersed in an atmosphere of horror and where we adopt the decision of a brave survivor who seeks to enter a laboratory that has been consumed by a zombie virus thanks to some nests located in the darkest areas of the laboratory."
              ghLink="https://github.com/Sebasm2028/Virus_Project"
              ItchLink="https://joseph122.itch.io/growvirus"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dark}
              isBlog={false}
              showGitHub={true}
              title="Facing My Darkness"
              description="Endless Runner platform game that takes the perspective of a small boy named Timmy who has experienced insecurities during his childhood, which have manifested as a shadow of himself through mirrors. Now, Timmy is being chased in his dreams by this very shadow."
              ghLink="https://github.com/SaulCamachoD/My-Darkness"
              ItchLink="hhttps://joseph122.itch.io/facing-my-darkness"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Distress}
              showGitHub={false}
              isBlog={false}
              title="Cattle in Distress"
              description="Platformer running game where we dive into the role of a farmer who must keep up the pace in his boots, dodging all obstacles without hitting any to achieve the highest possible score."
              ItchLink="https://joseph122.itch.io/cattle-in-distress"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
