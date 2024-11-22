type InitialState = {
  isAuth: Boolean;
};
const initialState: InitialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: any) => {
  // action = {type:'', isAuth:''}
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};
