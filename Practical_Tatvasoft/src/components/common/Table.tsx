import React from "react";
import CheckBox from "./CheckBox";
import { useDispatch } from "react-redux";
import { updateChecks } from "../../redux/actions/formAction";

const Table = ({ children }: any) => {
  const dispatch = useDispatch();

  return (
    <table className="table table-bordered mt-2">
      <thead>
        <tr>
          <th scope="col">
            <CheckBox checkboxId="selectAll" onChange={(e: any) => dispatch(updateChecks(e))} />
          </th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Status</th>
          <th scope="col" colSpan={2}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
