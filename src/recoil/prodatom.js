import { atom } from "recoil";

export const prodState = atom({
  key: "prodState",
  default: {
    items: [],
    page: 0,
    ttl: 0,
    loading: false,
  },
  effects: [
    () => {
      console.log("effects 1");
      return () => console.log("effects 1.1");
    },
    () => {
      console.log("effects 2");
    },
  ],
});
