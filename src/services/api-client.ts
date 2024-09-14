import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4dc36969a3224f1cb637631a8b2912a6",
  },
});
