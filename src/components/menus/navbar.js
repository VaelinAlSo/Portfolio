import { Menu } from "antd";
import {
  InfoCircleOutlined,
  TeamOutlined,
  HomeOutlined,
  ScheduleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

import React, { useState, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Routes from "../constants/routes";
import "./navbar.css";
import { Link } from "react-router-dom";

function useWindowDimensions() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return {
    width,
  };
}
export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const [current, setCurrent] = useState(
    window.location.pathname ? window.location.pathname : "accueil"
  );

  const setNav = (e) => {
    setCurrent(e);
  };
  const { width } = useWindowDimensions();
  return (
    <Fragment>
      <Navbar expand="lg" expanded={expanded}>
        <Navbar.Brand>
          
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Menu
              mode={width > 990 ? "horizontal" : "inline"}
              onClick={(e) => setCurrent(e.key)}
              selectedKeys={current}
            >
              <Menu.Item
                key="accueil"
                icon={<HomeOutlined />}
                className="customclass"
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  Accueil
                </Link>
              </Menu.Item>

              <Menu.Item
                className="customclass"
                key="Informations"
                icon={<InfoCircleOutlined />}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/Informations"
                >
                  Informations
                </Link>
              </Menu.Item>
              <Menu.Item
                className="customclass"
                key="Portfolio"
                icon={<TeamOutlined />}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/Portfolio"
                >
                  Portfolio
                </Link>
              </Menu.Item>
              
            </Menu>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes nav={setNav} />
    </Fragment>
  );
}
