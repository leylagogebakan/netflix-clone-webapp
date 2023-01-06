// Take our actions and according to these actions it's gonna update our context state

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFethcing: true,
        error: false,
      };

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFethcing: false,
        error: false,
      };

    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFethcing: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default AuthReducer;
