const initialState = { list: [], cart: [] };

export default function productsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_ITEMS": {
      return {
        ...state,
        list: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
