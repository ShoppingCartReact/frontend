"use strict";
import axios from "axios";
import index from "axios";
const API = "http://localhost:3030/cart";

// GET CART
export const getCart = () => {
  return dispatch => {
    axios
      .get(API)
      .then(response => {
        dispatch({ type: "GET_CART", payload: response.data.data });
      })
      .catch(err => {
        dispatch({
          type: "GET_CART_REJECTED",
          msg: "Error while getting the cart"
        });
      });
  };
};

// ADD TO CART
export const addToCart = (cart, id) => {
  let bookIndexToAdd = cart.findIndex(cart => {
    return cart.id == id;
  });
  let bookToAdd = cart[bookIndexToAdd];
  return dispatch => {
    axios
      .post(API, bookToAdd)
      .then(response => {
        dispatch({ type: "ADD_TO_CART", payload: cart });
      })
      .catch(err => {
        dispatch({
          type: "ADD_TO_CART_REJECTED",
          msg: err
        });
      });
  };
};

// UPDATE CART
export const updateCart = (id, unit, cart) => {
  const currentBookToUpdate = cart;
  const indexToUpdate = currentBookToUpdate.findIndex(cart => {
    return cart.id === id;
  });
  const newBookToUpdate = {
    ...currentBookToUpdate[indexToUpdate],
    quantity: currentBookToUpdate[indexToUpdate].quantity + unit
  };
  let cartUpdate = [
    ...currentBookToUpdate.slice(0, indexToUpdate),
    newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)
  ];

  return dispatch => {
    axios
      .put(`${API}/${id}`, newBookToUpdate)
      .then(response => {
        dispatch({ type: "UPDATE_CART", payload: cartUpdate });
      })
      .catch(err => {
        dispatch({
          type: "UPDATE_CART_REJECTED",
          msg: err
        });
      });
  };
};

// DELETE FROM CART
export const deleteCartItem = (id, cart) => {
  return dispatch => {
    axios
      .delete(`${API}/${id}`)
      .then(response => {
        dispatch({ type: "DELETE_CART_ITEM", payload: cart });
      })
      .catch(err => {
        dispatch({
          type: "DELETE_CART_ITEM_REJECTED",
          msg: "Error while deleting item from the cart"
        });
      });
  };
};
