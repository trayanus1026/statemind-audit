import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IClients } from './type'

// import dummy data from json
import fakeData from '@/fakeData.json'

const initialState: IClients = {
  clients: [],
  loading: false
}

export const fetchData = createAsyncThunk('clients/fetchData', async() => {
  // const response = await fetch('https://statemind.io/projects.json')
  // return response.json()
  const response = fakeData
  return response
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
