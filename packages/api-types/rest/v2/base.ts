export interface RESTApiBaseResult {
  status: RESTApiStatusResponse
  message: string
}

export type RESTApiStatusResponse =
  | "ok"
  | "error"