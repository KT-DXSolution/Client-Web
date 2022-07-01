// actionTypes
export const LOGIN = "auth/LOGIN";

// actions
export const login = () => {
  return {
    type: LOGIN
  };
};

// reducer
const initialState = {
  apiToken: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        apiToken: state.apiToken
      };
    default:
      return state;
  }
}
