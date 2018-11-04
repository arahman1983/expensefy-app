import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="col-md-6">
    <button onClick={startLogin} className="btn btn-primary">
      Log in
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
