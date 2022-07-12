// actionTypes
export const LOGIN = "auth/LOGIN";

// actions
export const login = apiToken => ({
  // setToken
  type: LOGIN,
  apiToken: apiToken
});

// reducer
const initialState = {
  apiToken: 'initToken'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        apiToken: action.apiToken
      };
    default:
      return state;
  }
}
