import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../modules/NoticiasGenerales/noticiasSlice';
import Loader from '../globalComponents/Loader';
import { Noticia } from '../modules/NoticiasGenerales/Components/Noticia';

const NoticiasGenerales = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector(state => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        📰 Últimas Noticias
      </h1>

      {status === 'loading' && <Loader />}
      {status === 'failed' && (
        <p className="text-red-600 text-center text-lg">{error}</p>
      )}

      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Noticia key={index} data={article} />
          ))}
        </div>
      )}

      
    </div>
  );
};

export default NoticiasGenerales;
