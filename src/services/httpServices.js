import axios from "axios";

axios.interceptors.response.use(null, (ex) => {
  const expectedError =
    ex.response && ex.response.status >= 400 && ex.response.status <= 500;
  if (!expectedError) {
    alert("An unexpected error has ocurred");
  }

  return Promise.reject(ex);
});

export default {
  get: axios.get,
};
