import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: {
    items: [],
    ttlqty: 0,
    ttl: 0,
  },
});
