import React from "react"
import DefaultLayout from "./containers/DefaultLayout"

const FileUpload = React.lazy(() => import("./views/FileUpload"))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", name: "Home", component: DefaultLayout, exact: true },
  { path: "/fileUpload", name: "FileUpload", component: FileUpload }
]

export default routes
