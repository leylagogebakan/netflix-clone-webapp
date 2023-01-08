// Take our actions and according to these actions it's gonna update our context state

const MovieReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES_START':
      return {
        movies: [],
        isFethcing: true,
        error: false,
      };

    case 'GET_MOVIES_SUCCESS':
      return {
        movies: action.payload,
        isFethcing: false,
        error: false,
      };

    case 'GET_MOVIES_FAILURE':
      return {
        movies: [],
        isFethcing: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;
