import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import reducer from "./userSlice";

const store = configureStore(
    {
        reducer: {
            user: userReducer,
        },
    }
)

console.log(reducer);

export default store
