import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application



export const useUserStatus = defineStore("posts", {
  // other options...
  state: () => {
    return {
      postAll : posts,
    }
  },
});
