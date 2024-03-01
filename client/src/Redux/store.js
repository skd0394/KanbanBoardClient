import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./reducer"

const store=configureStore({
    reducer:authReducer
})

export default store