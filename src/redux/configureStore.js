import { createStore, applyMiddleware ,combineReducers } from "redux";

import thunk from "redux-thunk";
import reducer from './reducer'

export function configureStore(preloadedState) {
  const middlewares = [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  
  const store = createStore(combineReducers({product : reducer}),preloadedState, middlewareEnhancer)

  return store
}