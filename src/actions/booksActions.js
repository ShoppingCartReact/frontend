"use strict";
import axios from "axios";
const API = "http://localhost:3030/product";

export const getBooks = () => {
  return dispatch => {
    axios
      .get(API)
      .then(response => {
        dispatch({ type: "GET_BOOKS", payload: response.data.data });
      })
      .catch(err => {
        dispatch({ type: "GET_BOOKS_REJECTED", payload: err });
      });
  };
};
// GET BOOKS
// export function getBooks(book) {
//   return function(dispatch) {
//     axios
//       .get("/api/books")
//       .then(function(response) {
//         dispatch({ type: "GET_BOOKS", payload: response.data });
//       })
//       .catch(function(err) {
//         dispatch({ type: "GET_BOOKS_REJECTED", payload: err });
//       });
//   };
// }

// POST A BOOK

export const postBooks = book => {
  return dispatch => {
    axios
      .post(API, book)
      .then(response => {
        dispatch({ type: "POST_BOOK", payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: "POST_BOOK_REJECTED",
          payload: "There was an error while posting a new book"
        });
      });
  };
};

// export function postBooks(book) {
//   return function(dispatch) {
//     axios
//       .post("/api/books", book)
//       .then(function(response) {
//         dispatch({ type: "POST_BOOK", payload: response.data });
//       })
//       .catch(function(err) {
//         dispatch({
//           type: "POST_BOOK_REJECTED",
//           payload: "There was an error while posting a new book"
//         });
//       });
//   };
// }

// DELETE A BOOK

export const deleteBooks = id => {
  return dispatch => {
    axios
      .delete(`${API}/${id}`)
      .then(response => {
        dispatch({ type: "DELETE_BOOK", payload: id });
      })
      .catch(err => {
        dispatch({ type: "DELETE_BOOK_REJECTED", payload: err });
      });
  };
};

// export function deleteBooks(id) {
//   return function(dispatch) {
//     axios
//       .delete("/api/books/" + id)
//       .then(function(response) {
//         dispatch({ type: "DELETE_BOOK", payload: id });
//       })
//       .catch(function(err) {
//         dispatch({ type: "DELETE_BOOK_REJECTED", payload: err });
//       });
//   };
// }

// RESET BUTTON
export function resetButton() {
  return {
    type: "RESET_BUTTON"
  };
}
