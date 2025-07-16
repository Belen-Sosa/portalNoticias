import React from 'react'
import { Link } from 'react-router-dom'
import { FaSatellite, FaNewspaper, FaCloudSun, FaBitcoin } from 'react-icons/fa'
import { BarraNavegacion } from '../globalComponents/BarraNavegacion'



const Home = () => {

const sections = [
  {
    title: 'Astronomia',
    description: 'Descubrí la imagen de la NASA de astronmia del dia .',
    icon: <FaSatellite className="text-4xl text-indigo-500" />,
    to: '/astronomia',
  },
  {
    title: 'Noticias Generales',
    description: 'Actualidad nacional e internacional al instante.',
    icon: <FaNewspaper className="text-4xl text-blue-500" />,
    to: '/noticiasGenerales',
  },
  {
    title: 'Clima',
    description: 'Pronóstico actualizado por ciudad, con datos precisos y confiables.',
    icon: <FaCloudSun className="text-4xl text-yellow-400" />,
    to: '/clima',
  },
 
]
  return (
<div className="h-full overflow-hidden bg-gray-100 py-4 px-4">
    <div className="max-w-6xl mx-auto text-center mb-12">
    <span className="loading loading-ring loading-xl"></span>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido al Portal de Noticias</h1>
      <p className="text-gray-600 text-lg">Explorá nuestras secciones para mantenerte siempre informado</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {sections.map((section, index) => (
        <Link to={section.to} key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col items-center">
            {section.icon}
            <h2 className="mt-4 text-xl font-semibold text-gray-800">{section.title}</h2>
            <p className="text-gray-600 mt-2 text-sm text-center">{section.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Home
