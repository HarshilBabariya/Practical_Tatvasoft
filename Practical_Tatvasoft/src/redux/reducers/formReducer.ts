const initialState = {
  users: [
    {
      id: 1,
      firstname: "Harshil",
      lastname: "Babariya",
      email: "harshilbabariya@gmail.com",
      phone: "6356382933",
      status: {
        value: "active",
        label: "Active",
      },
      isSelected: false,
    },
  ],
};

export const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE":
      const updatedUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      console.log("updatedUsers", updatedUsers);
      return {
        users: [...updatedUsers],
      };
    case "EDIT":
      const updatedUserData = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
      return {
        users: [...updatedUserData],
      };
    case "SELECTALL":
      const checkAllData = state.users.map((user) => {
        return {
          ...user,
          isSelected: action.payload,
        };
      });
      console.log('checkAllData', checkAllData)
      return {
        users: [...checkAllData],
      };
    default:
      return {
        ...state,
      };
  }
};
