const defaultState = {
  token: localStorage.getItem('jwt')
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
};