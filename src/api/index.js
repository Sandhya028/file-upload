import axios from "axios"

let url = window.location.href

const restApiInfo = {
  baseURL: `http://localhost:8080/api` || "/api"
}

const createRestApiClient = ({ baseURL }) =>
  axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })

export const restApiClient = createRestApiClient(restApiInfo)
