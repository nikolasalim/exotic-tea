export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(response => response.json())
    .then(data => {
      dispatch(productsFetching(data));
    });
}

export function productsFetching(data) {
  return {
    type: "FETCHED_ITEMS",
    payload: data
  };
}

export function addingItemToCart(id) {
  return {
    type: "ADD_TO_CART",
    payload: id
  };
}

export function removingItemToCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
}
