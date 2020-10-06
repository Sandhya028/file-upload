import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import "./App.scss"
import configureStore from "./store"
import ErrorModalContainer from "./components/ErrorModal"
import ToastrModalContainer from "./components/Toastr"
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: [
      "Montserrat Web:100,200,300,400,500,600,700,800,900",
      "sans-serif"
    ]
  }
})

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
)

// Containers
const DefaultLayout = Loadable({
  loader: () => import("./containers/DefaultLayout"),
  loading
})

class App extends Component {
  render() {
    const { store, persistor } = configureStore()

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastrModalContainer />
          <ErrorModalContainer />
          <HashRouter>
            <Switch>
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
