
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
const apiKey = import.meta.env.VITE_APIKEY_WEATHER;
export const fetchWeather = createAsyncThunk('get/fetchWeather', async () => {
  console.log('ejecutando fetchWeather...');
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-27.369348&lon=-55.898149&appid=${apiKey}&lang=es&units=metric`);
  console.log(res);
  return res.data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;