const initialState = { list: [], cart: [] };

export default function productsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_ITEMS": {
      console.log(
        "logging action.payload from reducer feched items:",
        action.payload
      );
      return {
        ...state,
        list: action.payload
      };
    }
    case "ADD_TO_CART": {
      const productId = action.payload;
      const inCart = state.cart.find(p => p.id === productId);

      if (!inCart) {
        const product = state.list.find(p => p.id === productId);
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }]
        };
      } else {
        const updatedCart = state.cart.map(p =>
          p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
        );
        return {
          ...state,
          cart: updatedCart
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const productId = action.payload;
      //
      const inCart = state.cart.find(p => p.id === productId);
      // First check if already in cart
      if (!inCart) {
        return state;
      } else {
        // Check qty
        if (inCart.quantity > 1) {
          // if bigger than 1, substract
          const updatedCart = state.cart.map(p =>
            p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
          );
          return {
            ...state,
            cart: updatedCart
          };
        } else {
          // if not remove
          const updatedCart = state.cart.filter(p => p.id !== productId);
          return {
            ...state,
            cart: updatedCart
          };
        }
      }
    }
    default: {
      return state;
    }
  }
}

//const inCart = state.cart.find(p => p.id === productId);
// if (!inCart) return state;

// return inCart.quantity > 1
//   ? {
//       ...state,
//       cart: state.cart.map(p =>
//         p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
//       )
//     }
//   : { ...state, cart: state.cart.filter(p => p.id !== productId) };
