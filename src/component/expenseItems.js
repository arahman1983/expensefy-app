import React from "react";
import { connect } from "react-redux";
import { removeExpens } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseItemList = ({ dispatch, id, description, amount, createdAt }) => (
  <tr>
    <td className="col-3">{description}</td>
    <td className="col-3">{amount}</td>
    <td className="col-3">{moment(createdAt).format("MMM Do, YYYY")}</td>
    <td className="col-3">
      <Link className="btn btn-info" to={`/edit/${id}`}>
        Edit
      </Link>
    </td>
    <td className="col">
      <button
        className="btn btn-warning"
        onClick={() => {
          dispatch(removeExpens({ id }));
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default connect()(ExpenseItemList);
