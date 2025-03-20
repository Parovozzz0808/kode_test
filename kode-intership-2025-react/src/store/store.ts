import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./index";
import { thunk, ThunkDispatch } from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = ThunkDispatch<RootState, undefined, any>;

export default store;