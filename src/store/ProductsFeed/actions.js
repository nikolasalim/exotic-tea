export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(response => response.json())
    .then(data => {
      console.log("data is: ", data);
      dispatch(productsFetching(data));
    });
}

export function productsFetching(data) {
  console.log("is productsFetching working?");
  return {
    type: "FETCHED_ITEMS",
    payload: data
  };
}
