import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "./CocktailSlice";

export default configureStore({

    reducer:{
        app:CocktailReducer
    }
})