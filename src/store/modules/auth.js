// actionTypes
export const LOGIN = "auth/LOGIN";

// actions
export const login = (apiToken, ceoSeq) => ({
  // setToken
  type: LOGIN,
  apiToken: apiToken,
  ceoSeq: ceoSeq
});

// reducer
const initialState = {
  apiToken: 'initToken',
  ceoSeq: 0
};

export default function reducer(state = initialState, action) {
  console.log('auth.reducer : ', state, action)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        apiToken: action.apiToken,
        ceoSeq: action.ceoSeq
      };
    default:
      return state;
  }
}
