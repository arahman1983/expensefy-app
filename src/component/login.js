import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="row">
    <div className="col-md-6 mx-auto text-center py-5">
      <h2>Expensefy App</h2>
      <p>Your Epenses here</p>
      <br />
      <button onClick={startLogin} className="btn btn-primary">
        Log in
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
