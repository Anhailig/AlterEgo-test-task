import { createSlice } from "@reduxjs/toolkit"
import { fetchNews, removeNews } from "./actionCreators"

import type { NewsInititalState } from "../types"


const initialState: NewsInititalState = {
  list: [],
  isLoading: true,
  error: '',
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false
        state.list = action.payload
      })
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true
      })
      .addCase(removeNews.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload)
      })
  }
})

export default newsSlice.reducer