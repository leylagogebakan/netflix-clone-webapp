// Take our actions and according to these actions it's gonna update our context state

const ListReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LISTS_START':
      return {
        lists: [],
        isFethcing: true,
        error: false,
      };

    case 'GET_LISTS_SUCCESS':
      return {
        lists: action.payload,
        isFethcing: false,
        error: false,
      };

    case 'GET_LISTS_FAILURE':
      return {
        lists: [],
        isFethcing: false,
        error: true,
      };

    case 'CREATE_LIST_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case 'CREATE_LIST_SUCCESS':
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };

    case 'CREATE_LIST_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case 'DELETE_LIST_START':
      return {
        ...state,
        isFethcing: true,
        error: false,
      };

    case 'UPDATE_LIST_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case 'UPDATE_LIST_SUCCESS':
      return {
        lists: state.lists.map(
          (list) => list._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };

    case 'UPDATE_LIST_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case 'DELETE_LIST_SUCCESS':
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFethcing: false,
        error: false,
      };

    case 'DELETE_LIST_FAILURE':
      return {
        ...state,
        isFethcing: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default ListReducer;
