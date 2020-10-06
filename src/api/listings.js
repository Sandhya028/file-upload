import qs from "qs"

import { restApiClient } from "."
export const fetchInformation = data => {
  return restApiClient.get(`/information/${data.id}`)
}

export const sendFile = data => {
  return restApiClient.post(`/information`, data)
}
