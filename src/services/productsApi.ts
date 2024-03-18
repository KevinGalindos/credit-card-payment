import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const getAllProduts = async () => {
  const res = await axios.get(`${baseUrl}/products?limit=8`);
  return res.data;
};
