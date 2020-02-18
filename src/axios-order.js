import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-beans.firebaseio.com/"
});

export default instance;
