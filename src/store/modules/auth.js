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
  type: LOGOUT,
  ...initialState
});

// reducer
const initialState = {
  apiToken:'initToken',
  ceoSeq:0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log(state,action)
      return {
        ...state,
        apiToken: action.apiToken,
        ceoSeq: action.ceoSeq
      }
    case LOGOUT:
      console.log(state,action)
      localStorage.removeItem('persist:root')
      return { 
        ...state,
        apiToken: action.apiToken,
        ceoSeq: action.ceoSeq
      }
    default:
      return state;
  }
}
