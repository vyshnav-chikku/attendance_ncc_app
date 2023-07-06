import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const apiUrl = "http://192.168.42.170:5000/api";

export const getUser = () => {
  return useMutation((token) => {
    axios.post(apiUrl + `/getData`, token);
  });
};
