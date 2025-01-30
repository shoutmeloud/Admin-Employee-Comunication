import { createStore } from "vuex";

const store = createStore({
  modules: {},
});

// Dynamically register modules
// Promise.all([
//   import("./modules/userData"),
// ]).then(([userDataModule]) => {
//   store.registerModule("userDataModule", userDataModule.default);
// });

export default store;
