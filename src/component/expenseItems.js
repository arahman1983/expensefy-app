import React from "react";
import { connect } from "react-redux";
import { removeExpens } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseItemList = ({ dispatch, id, description, amount, createdAt }) => (
  <tr>
    <td className="col">{description}</td>
    <td className="col">{amount}</td>
    <td className="col">{moment(createdAt).format("MMM Do, YYYY")}</td>
    <td className="col">
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
