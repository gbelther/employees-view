import axios from "axios";

export const apiemployess = axios.create({
  baseURL: "http://localhost:3333/employess",
});
