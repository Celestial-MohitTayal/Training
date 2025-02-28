// const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from'../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;