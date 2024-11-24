type InitialState = {
  mode: Boolean;
};
const initialState: InitialState = {
  mode: false,
};

export const modeReducer = (state = initialState, action: any) => {
  // action = {type:'', mode:''}
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};
