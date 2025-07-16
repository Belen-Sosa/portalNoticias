
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
const apiKey = import.meta.env.VITE_APIKEY_GENERAL_NEWS;
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  return res.data.articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;