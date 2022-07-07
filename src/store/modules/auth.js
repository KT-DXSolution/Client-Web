// actionTypes
export const LOGIN = "auth/LOGIN";

// actions
export const login = apiToken => ({
  type: LOGIN,
  payload: apiToken
});

// reducer
const initialState = {
  apiToken: 'initToken'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        apiToken: state.apiToken
      };
    default:
      return state;
  }
}
