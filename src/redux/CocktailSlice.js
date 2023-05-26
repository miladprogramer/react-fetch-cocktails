import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktail=createAsyncThunk("cocktails/fetchCocktails", async()=>{
    return fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res)=>res.json())
})