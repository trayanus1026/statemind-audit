import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IClients } from './type'

const initialState: IClients = {
  clients: [],
  loading: false
}

export const fetchData = createAsyncThunk('clients/fetchData', async() => {
  console.log("asdf")
  const response = await fetch('https://statemind.io/projects.json')
  return response.json()
})

export const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
    .addCase(fetchData.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false
      state.clients = action.payload
    })
    .addCase(fetchData.rejected, (state) => {
      state.loading = false
      state.clients = []
    })
},
})

export default clientSlice.reducer
