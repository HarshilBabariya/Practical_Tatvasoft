import React, { useId, useReducer } from "react";
import Input from "./Input";
import Button from "./Button";
import SelectDropdown from "./SelectDropdown";
import { statusDropdown } from "../../data/customData";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../../redux/actions/formAction";
import { useNavigate, useLocation } from "react-router-dom";
import { FormProps } from "../types";

const UserForm = ({ isEdit }: FormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useReducer(
    (prev: any, updated: any) => {
      return { ...prev, ...updated };
    },
    {
      id: useId(),
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      status: { value: "", label: "" },
    }
  );

  const handleUser = (e: any) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(editUser(formData));
    } else {
      dispatch(addUser(formData));
    }
    navigate("/");
  };

  return (
    <>
      <h4 className="mt-5">{`${isEdit ? "Edit" : "Add"} User`}</h4>
      <form className="container mt-5">
        <div className="mb-3">
          <label>FirstName: </label>
          <Input
            type="text"
            placeholder="Enter first name"
            value={location.state?.firstname}
            onChange={(e: any) => setFormData({ firstname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>LastName: </label>
          <Input
            type="text"
            placeholder="Enter last name"
            value={location.state?.lastname}
            onChange={(e: any) => setFormData({ lastname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Email: </label>
          <Input
            type="email"
            placeholder="Enter email"
            value={location.state?.email}
            onChange={(e: any) => setFormData({ email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Phone: </label>
          <Input
            type="text"
            placeholder="Enter Phone number"
            value={location.state?.phone}
            maxLength={10}
            onChange={(e: any) => setFormData({ phone: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Status: </label>
          <SelectDropdown
            className="w-50"
            options={statusDropdown}
            value={location.state?.status}
            onChange={(e: any) => setFormData({status: e})}
          />
        </div>
        <div className="mb-3">
          <Button
            className="btn-success m-2"
            title={isEdit ? "Update" : "Add"}
            onClick={handleUser}
          />
          <Button
            className="btn-danger"
            title="Cancel"
            onClick={() => navigate("/")}
          />
        </div>
      </form>
    </>
  );
};

export default UserForm;
