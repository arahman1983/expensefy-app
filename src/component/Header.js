import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <div className="row p-3 bg-light">
      <h3>Expinsefy</h3>
    </div>
    <div className="row py-3">
      <NavLink className="navlink" activeClassName="bg-warning" to="/dashboard">
        Home Page
      </NavLink>
      <NavLink className="navlink" activeClassName="bg-warning" to="/create">
        Add Expinse
      </NavLink>
      <button onClick={startLogout} className="btn btn-default">
        Logout
      </button>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
