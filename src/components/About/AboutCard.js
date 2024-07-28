import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jossep Acosta </span>
            from <span className="purple"> Bogotá, Colombia.</span>
            <br />
            I currently work as a Unity game developer.
            <br />
            In my career, I have developed front-end programs with the District
            University and a development Bootcamp with the Unity engine from
            Generation Colombia.
            <br />
            <br />I love working in different areas of game development such as:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Game mechanics
            </li>
            <li className="about-activity">
              <ImPointRight /> AI programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Animation 3D
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Find excellence among the details <br />
            that have made you stumble"{" "}
          </p>
          <footer className="blockquote-footer">Jossep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
