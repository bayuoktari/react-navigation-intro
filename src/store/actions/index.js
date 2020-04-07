import axios from "axios";

export const fetchPost = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        // console.log(data);
        dispatch({ type: "FETCH_POSTS", posts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(({ data }) => {
        dispatch({ type: "FETCH_DETAIL", detail: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        dispatch({ type: "FETCH_USERS", users: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
