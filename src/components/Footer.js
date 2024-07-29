import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaItchIo } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>My phone number is +57 319 479 8510</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} JA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AllanAcostaM"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://itch.io/profile/joseph122"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaItchIo />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/joseph-acosta/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
