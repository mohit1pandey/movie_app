
//  this is the store file for the application

import { configureStore } from "@reduxjs/toolkit";
import homeslice from "./homeslice";

const store =configureStore({
  reducer :{
    home:homeslice
  },

})

//  now export this store to index.js to connect it with the react-app

export default store;
