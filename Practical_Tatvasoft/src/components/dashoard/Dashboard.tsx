import React, { useEffect, useState } from "react";
import SelectDropdown from "../common/SelectDropdown";
import Input from "../common/Input";
import Button from "../common/Button";
import Table from "../common/Table";
import CheckBox from "../common/CheckBox";
import Badge from "../common/Badge";
import { useNavigate } from "react-router-dom";
import { searchSelectDropdown } from "../../data/customData";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/formAction";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.form.users);

  const [userData, setUserData] = useState(users);
  const [searchText, setSearchText] = useState("");

  const handleFilterUser = (e: any) => {
    const filteredData = userData.filter((userItem: any) => {
      return userItem[e.value].includes(searchText);
    });
    setUserData([...filteredData]);
  };

  useEffect(() => {
    setUserData(users);
  }, [users]);
  return (
    <div className="container">
      <h3 className="mt-5">CRUD USERS</h3>
      <h6 className="text-start">Search</h6>
      <div className="d-flex">
        <SelectDropdown
          className="p-2 w-25"
          options={searchSelectDropdown}
          onChange={handleFilterUser}
        />
        <Input
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 w-25"
        />
        <Button
          className="btn-primary ml-auto p-2 w-25"
          title="+ Create New User"
          onClick={() => navigate("/user")}
        />
      </div>
      <div>
        <Table>
          {userData.length > 0 ? (
            userData.map((user: any) => {
              return (
                <tr key={user.id}>
                  <td>
                    <CheckBox value={user.isSelected} checkboxId="select" onChange={() => {}} />
                  </td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Badge status={user.status.value} />
                  </td>
                  <td>
                    <Button
                      title="Edit"
                      className="btn-outline-success"
                      onClick={() => {
                        navigate(`/user/${user.id}`, { state: user });
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      title="Delete"
                      className="btn-outline-danger"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Are you sure you want to delete ${
                              user.firstname + " " + user.lastname
                            } user?`
                          )
                        ) {
                          dispatch(deleteUser(user.id));
                        }
                      }}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8}>No Record Found.</td>
            </tr>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
