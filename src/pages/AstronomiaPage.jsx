import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAstronomy,
  fetchNASAimgs,
  fetchStarData,
} from "../modules/Astronomia/astronomiaSlice";
import Loader from "../globalComponents/Loader";
import { ImgNasa } from "../modules/Astronomia/Components/ImgNasa";
import EstrellaCard from "../modules/Astronomia/Components/EstrellaCard";

const AstronomiaPage = () => {
  const dispatch = useDispatch();
  const {
    data,
    loading,
    error,
    dataNasa,
    loadingNasa,
    errorNasa,
    dataStar,
    errorStar,
    loadingStar,
  } = useSelector((state) => state.astronomy);

  useEffect(() => {
    dispatch(fetchAstronomy());
    dispatch(fetchNASAimgs());
    dispatch(fetchStarData());
  }, [dispatch]);



  if (loading || loadingNasa) return <Loader />;
  if (error || errorNasa) return <p className="text-red-500">Error: {error}</p>;
  if (!data || !dataNasa) return null;


  return (
    <div className="p-6 ">
           <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
           🔭 Astronomia
      </h1>

      <div className="w-full flex gap-5 justify-between">
        <div className="w-full  bg-white rounded-xl shadow-lg  ">
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-indigo-700 mb-2">
              {data.title}
            </h1>
            <p className="text-sm text-gray-500 mb-4">{data.date}</p>

            {data.media_type === "image" ? (
              <img
                src={data.url}
                alt={data.title}
                className="rounded-xl shadow mx-auto w-full max-w-full max-h-80 object-cover"
              />
            ) : (
              <div className=" pt-[56.25%] mb-4 justify-start">
                <iframe
                  title="apod-video"
                  src={data.url}
                  allow="encrypted-media"
                  allowFullScreen
                  className="w-20 h-20 rounded-xl shadow"
                />
              </div>
            )}

            <p className="text-gray-700 text-md leading-relaxed mt-4">
              {data.explanation ?data.explanation: ""}
            </p>
          </div>
        </div>
        {dataStar && <EstrellaCard star={dataStar} />}
      </div>

      {dataNasa && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {dataNasa.map((image, index) => (
            <ImgNasa key={index} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AstronomiaPage;
