import React, { useEffect, useState } from "react";
import MenuJson from "../../data/menu.json";
import BeNavGroup from "./nav/nav-group";
import { Nav, Card } from "react-bootstrap";
const MainSidebar = () => {
  const [menu, setMenu] = useState({});

  useEffect(() => {
    setMenu(MenuJson);
  }, []);

  if (menu.length == null) {
    return <h1>cargando menu</h1>;
  }

  return (
    <>
      <div className="main-sidebar-nav default-navigation">
        <div className="nano has-scrollbar">
          <div className="nano-content sidebar-nav ">
            <Card.Body className="border-bottom text-center nav-profile">
              {/* <div className="notify setpos">
                <span className="heartbit" />
                <span className="point" />
              </div>
              <Image
                alt="profile"
                className="margin-b-10"
                src="/assets/img/avtar-2.png"
                width={80}
              />
              <p className="lead margin-b-0 toggle-none">John Doe</p>*/}
              <p className="text-muted mv-0 toggle-none">Bienvenid@</p>
            </Card.Body>
            <Nav as="ul" className="metisMenu flex-column" id="menu">
              {menu.map((groupItem, key) => {
                return (
                  <>
                    <li className="nav-heading" key={key}>
                      <span>{groupItem.groupname.toUpperCase()}</span>
                    </li>
                    <BeNavGroup menu={groupItem.children} />
                  </>
                );
              })}
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
