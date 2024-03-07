const initialState = {
    userData: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return {
          ...state,
          userData: action.payload,
        };
      case 'REMOVE_USER_DATA':
        return {
          ...state,
          userData: null,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  