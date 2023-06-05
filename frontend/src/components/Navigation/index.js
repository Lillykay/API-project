import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import "./Navigation.css";
import WikiTaz from "./WikiTaz.svg";
function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <ul className="navbar">
      <li>
        <NavLink id="WikiTaz" exact to="/">
          <img src={WikiTaz} alt="WikiTaz"></img>
        </NavLink>
      </li>
      {isLoaded && (
        <li>
          <Menu user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;
