import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY_SPACIAL_NEWS;
const estrellas = [
"Agujero_negro",
  "Supernova",
  "Nebulosa",
  "Vía_Láctea",
  "Materia_oscura",
  "Energía_oscura",
  "Estrella_de_neutrones",
  "Púlsar",
  "Exoplaneta",
  "Multiverso"
];
const getEstrellaRandom = () => {
  const index = Math.floor(Math.random() * estrellas.length);
  return estrellas[index];
};

export const fetchAstronomy = createAsyncThunk(
  "astronomy/fetchImg",
  async () => {
    const res = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    console.log("res", res);
    return res.data;
  }
);
export const fetchNASAimgs = createAsyncThunk("get/NASAimgs", async () => {
  const res = await axios.get(`https://images-api.nasa.gov/search?q=galaxy`);
  console.log("res",res.data.collection?.items)
  return res.data.collection?.items;
});

export const fetchStarData = createAsyncThunk("get/starData", async () => {
  const res = await axios.get(`https://es.wikipedia.org/api/rest_v1/page/summary/${getEstrellaRandom()}`);
  console.log("res star",res.data)
  return res.data;
});

const newsSpacialSlice = createSlice({
  name: "astronomy",
  initialState: {
    loading: false,
    data: null,
    error: null,
    loadingNasa:false,
    dataNasa:null,
    errorNasa:null,
    loadingStar: false,
    dataStar: null,
    errorStar: null,
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAstronomy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAstronomy.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAstronomy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNASAimgs.pending, (state) => {
        state.loadingNasa = true;
        state.errorNasa = null;
      })
      .addCase(fetchNASAimgs.fulfilled, (state, action) => {
        state.loadingNasa = false;
        state.dataNasa = action.payload;
      })
      .addCase(fetchNASAimgs.rejected, (state, action) => {
        state.loadingNasa = false;
        state.errorNasa = action.error.message;
      })
      .addCase(fetchStarData.pending, (state) => {
        state.loadingStar = true;
        state.errorStar = null;
      })
      .addCase(fetchStarData.fulfilled, (state, action) => {
        state.loadingStar = false;
        state.dataStar = action.payload;
      })
      .addCase(fetchStarData.rejected, (state, action) => {
        state.loadingStar = false;
        state.errorStar = action.error.message;
      });
  },
});

export default newsSpacialSlice.reducer;
