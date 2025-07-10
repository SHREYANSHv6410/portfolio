import React from "react";
import "./Footer.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="text-center  text-muted py-3 border-top mt-5"
      style={{ color: "white", zIndex: 1000 }}
    >
      <section className="Rights">
        © 2025 [Shreyansh V]. All rights reserved.
      </section>
    </footer>
  );
}

export default Footer;
