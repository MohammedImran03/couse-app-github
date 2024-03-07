

export const setUserData = (userData) => {
    return {
      type: 'SET_USER_DATA',
      payload: userData,
    };
  };
  
  export const removeUserData = () => {
    return {
      type: 'REMOVE_USER_DATA',
    };
  };
  