// actionTypes
export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

// actions
export const login = (apiToken, ceoSeq) => ({
  // setToken
  type: LOGIN,
  apiToken: apiToken,
  ceoSeq: ceoSeq
});
export const logout = () =>({
  type: LOGOUT
});

// reducer
const initialState = {
  apiToken:'init',
  ceoSeq:0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        apiToken: action.apiToken,
        ceoSeq: action.ceoSeq
      };
    case LOGOUT:
      return {
        ...state,
        ...initialState
      }
    default:
      return state;
  }
}
