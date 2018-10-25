import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expinsefy</h1>
    <div className="row py-3">
      <NavLink
        className="navlink"
        activeClassName="bg-warning"
        to="/"
        exact={true}
      >
        Home Page
      </NavLink>
      <NavLink className="navlink" activeClassName="bg-warning" to="/create">
        Add Expinse
      </NavLink>
      <NavLink className="navlink" activeClassName="bg-warning" to="/help">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
