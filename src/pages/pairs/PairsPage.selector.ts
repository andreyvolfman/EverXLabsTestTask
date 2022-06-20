import { selector } from "recoil";

export const pairsQuery = selector({
  key: "Pairs",
  get: async () => {
    const response = await fetch("https://api.flatqube.io/v1/pairs/meta");
    return response.json();
  },
});
