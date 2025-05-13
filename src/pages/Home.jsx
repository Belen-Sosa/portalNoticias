import React from 'react'
import { Link } from 'react-router-dom'
import { FaSatellite, FaNewspaper, FaCloudSun, FaBitcoin } from 'react-icons/fa'



const Home = () => {

const sections = [
  {
    title: 'Noticias Espaciales',
    description: 'Descubrí lo último sobre exploración espacial, misiones, satélites y más.',
    icon: <FaSatellite className="text-4xl text-indigo-500" />,
    to: '/espacio',
  },
  {
    title: 'Noticias Generales',
    description: 'Actualidad nacional e internacional al instante.',
    icon: <FaNewspaper className="text-4xl text-blue-500" />,
    to: '/noticias',
  },
  {
    title: 'Clima',
    description: 'Pronóstico actualizado por ciudad, con datos precisos y confiables.',
    icon: <FaCloudSun className="text-4xl text-yellow-400" />,
    to: '/clima',
  },
  {
    title: 'Criptomonedas',
    description: 'Cotizaciones, tendencias y noticias del mundo cripto.',
    icon: <FaBitcoin className="text-4xl text-orange-400" />,
    to: '/cripto',
  },
]
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido al Portal de Noticias</h1>
      <p className="text-gray-600 text-lg">Explorá nuestras secciones para mantenerte siempre informado</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
