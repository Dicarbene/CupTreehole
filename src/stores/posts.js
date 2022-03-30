import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application

const generatePost = () => {
  return {
    id: faker.datatype.number({ min: 10000, max: 99999 }),
    time: faker.lorem.text(),
    user: faker.internet.userName(),
    tags: faker.datatype.number({ min: 0, max: 127 }),
    title: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    content: faker.lorem.paragraphs(),
    comments: [],
  };
};

let posts = [];

for (let i = 0; i < 10; i++) {
  posts.push(generatePost());
}


export const usePostStore = defineStore("posts", {
  // other options...
  state: () => {
    return {
      postAll : posts,
    }
  },
  actions: {
  },
  getters: {
    
  }
});
