import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const Topbar = () => {
  const handleToggleClass = (e) => {
    e.preventDefault();
    const rootNodeChildren = document.getElementById("root").children;
    for (let i = 0; i < rootNodeChildren.length; i++)
      if (rootNodeChildren[i].classList.contains("nav-collapsed"))
        rootNodeChildren[i].classList.remove("nav-collapsed");
      else rootNodeChildren[i].classList.add("nav-collapsed");
  };
  return (
    <>
      <div className="top-bar primary-top-bar">
        <Container fluid>
          <Row>
            <Col>
              <Link className="admin-logo" to="/">
                <h1>
                  <Image
                    alt=""
                    src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"
                    className="logo-icon margin-r-10"
                  />
                </h1>
              </Link>
              <div
                className="left-nav-toggle"
                onClick={(e) => handleToggleClass(e)}
              >
                <Button as="a" variant="link" className="nav-collapse p-0">
                  <i className="fa fa-bars" />
                </Button>
              </div>
              <div className="left-nav-collapsed">
                <Button
                  as="a"
                  variant="link"
                  className="nav-collapsed p-0"
                  onClick={(e) => handleToggleClass(e)}
                >
                  <i className="fa fa-bars" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Topbar;
