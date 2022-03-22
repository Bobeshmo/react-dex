import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk"
import rootReducer from "./rootReducer";

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch