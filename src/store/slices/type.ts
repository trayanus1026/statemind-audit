interface IClient {
  client: string
  tvl: number
  img: string
  loc: number
  audits: object[]
}

export interface IClients {
  clients: IClient[]
  loading: boolean
}