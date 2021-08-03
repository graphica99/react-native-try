import React from "react"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import productReducer from "./store/reducers/product"
import MainNavigator from "./navigations/MainNavigator"

const rootReducer = combineReducers({
  products: productReducer,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}
