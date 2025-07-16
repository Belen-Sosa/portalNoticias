import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../modules/Clima/climaSlice";
import Loader from "../globalComponents/Loader";
import fondo from "../assets/forest-mountains-sunset-cool-weather-minimalism-wallpaper-preview.jpg";
import { Card } from "flowbite-react";
import amanecer from "../assets/amanecer.jpg";
import atardecer from "../assets/atardecer.jpg";
const ClimaPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);
  const [fecha, setfecha] = useState("");
  const [hora, setHora] = useState("");
  useEffect(() => {
    console.log("hola");
    dispatch(fetchWeather());
  }, [dispatch]);
  const obtenerFechaYHora = () => {
    const ahora = new Date();

    // Hora actual
    const horas = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const horaFormateada = `${horas}:${minutos}`;

    // Fecha en formato largo y en español
    const opcionesFecha = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const fechaFormateada = ahora.toLocaleDateString("es-AR", opcionesFecha);
    setHora(horaFormateada);
    setfecha(
      fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1)
    );
  };
  useEffect(() => {
    obtenerFechaYHora();
  }, []);
  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (data.length == 0) return null;

  return (
    <div
      className="h-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-white pt-5">
        🌤️ Clima
      </h1>
      <div className="flex justify-between">
        <div className="bg-white/80 p-6 rounded-xl mt-20 shadow-lg w-1/3 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5">{data.name}</h2>
          <p className="text-5xl font-bold mt-10 ">{hora}</p>
          <p className="text-xl">{fecha}</p>
        </div>
        <div className="bg-white/80 p-6 rounded-xl mt-20 shadow-lg w-1/2  mx-auto flex text-center">
          <div className="mt-4  text-sm  mx-28">
            <p className="text-5xl font-extrabold mt-5"> {data.main.temp}°C</p>
            <p className="text-md font-bold mt-2">
              {" "}
              Sensación termica: {data.main.feels_like}°C
            </p>
          </div>
          <div className="mt-10  text-2xl ">
            <p> Mínima: {data.main.temp_min}°C</p>
            <p> Máxima: {data.main.temp_max}°C</p>
          </div>
          <div className="flex items-center gap-4 mx-8">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
            />
            <p className="text-sm capitalize">{data.weather[0].description}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="bg-white/80 p-6 rounded-xl mt-20 shadow-lg w-1/3 mx-auto text-center">
          <div className="mt-4 grid grid-cols-3  text-sm font-bold text-center mx-auto ">
            <p className="mt-5"> Mínima: {data.main.temp_min}°C</p>
            <p className="mt-5">💨 Viento: {data.wind.speed} m/s</p>
            <p className="mt-5">🧭 Dirección: {data.wind.deg}°</p>
            <p className="mt-5"> Máxima: {data.main.temp_max}°C</p>
            <p className="mt-5">💧 Humedad: {data.main.humidity}%</p>

            <p className="mt-5">📈 Presión: {data.main.pressure} hPa</p>
          </div>
        </div>
        <div className="bg-white/80 p-6 rounded-xl mt-20 shadow-lg w-1/2  mx-auto flex text-center gap-10">
          <Card className="w-1/2" imgSrc={amanecer} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              amanecer
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </Card>
          <Card className="w-1/2" imgSrc={atardecer} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              atardecer
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </Card>
    
        </div>
      </div>
    </div>
  );
};

export default ClimaPage;
