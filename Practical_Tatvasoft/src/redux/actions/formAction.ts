import { User } from "../formType";

export const addUser = (data: User) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const editUser = (data: User) => {
  return {
    type: "EDIT",
    payload: data,
  };
};

export const deleteUser = (dataId: User) => {
  return {
    type: "DELETE",
    payload: dataId,
  };
};

export const updateChecks = (value: boolean) => {
  return {
    type: 'SELECTALL',
    payload: value
  }
}