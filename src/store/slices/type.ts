interface IClient {
  client: string
  tvl: number
  img: string
  loc: number
  audits: []
}

export interface IClients {
  clients: IClient[]
  loading: boolean
}