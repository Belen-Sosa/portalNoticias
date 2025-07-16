import { configureStore } from '@reduxjs/toolkit'

import newsReducer from '../modules/NoticiasGenerales/noticiasSlice'
import astronomyReducer from '../modules/Astronomia/astronomiaSlice'
import weatherReducer from '../modules/Clima/climaSlice'

export const store = configureStore({
reducer: {
    news:  newsReducer,
    astronomy: astronomyReducer,
    weather: weatherReducer,
}
})