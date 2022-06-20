import { selector } from "recoil";

export const pairDetailQuery = selector({
  key: "PairDetail",
  get: async () => {
    const response = await fetch("https://api.flatqube.io/v1/pairs/meta");
    return response.json();
  },
});
