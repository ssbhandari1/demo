import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/DataSlice";


const store=configureStore({
    reducer:{
        newsData:dataReducer
    }
})

export default store