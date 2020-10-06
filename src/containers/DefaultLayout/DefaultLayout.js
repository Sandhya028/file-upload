import React, { Suspense, useEffect } from "react"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import { connect } from "react-redux"
// sidebar nav config
import navigation from "../../_nav"

// routes config
import routes from "../../routes"
import FileUpload from "../../views/FileUpload"

import { getAccessToken } from "../../reducers"
import { restApiClient } from "../../api"
const DefaultFooter = React.lazy(() => import("./DefaultFooter"))
const DefaultHeader = React.lazy(() => import("./DefaultHeader"))

const RouteContainter = withRouter(() => {
  const routesCompoenent = routes.map((route, idx) => {
    return route.component ? (
      <Route
        key={idx}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={props => <route.component {...props} />}
      />
    ) : null
  })

  return (
    <Switch>
      {routesCompoenent}
      <Redirect from="/" to="/fileupload" />
    </Switch>
  )
}, FileUpload)

const DefaultLayout = () => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">
      <div className="sk-spinner sk-spinner-pulse" />
    </div>
  )

  useEffect(() => {
    restApiClient.defaults.params = {
      ...restApiClient.defaults.params
    } //add username as a parameter of api request
  }, [])
  return (
    <div className="App">
      <Suspense fallback={loading()}>
        <DefaultHeader navConfig={navigation} />
      </Suspense>
      <div>
        <main className="main">
          <Suspense fallback={loading()}>
            <RouteContainter />
          </Suspense>
        </main>
      </div>
      <Suspense fallback={loading()}>
        <DefaultFooter />
      </Suspense>
    </div>
  )
}

export default connect(
  state => ({
    token: getAccessToken(state)
  }),
  {}
)(DefaultLayout)
