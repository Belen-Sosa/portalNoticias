
import { BarraNavegacion } from "./BarraNavegacion";
import { PiePagina } from "./PiePagina";


const Layout = ({ children }) => {
    return (
      <div className="flex flex-col h-screen bg-gray-100">
        <BarraNavegacion />
  
        <main className="flex-grow ">
          {children}
        </main>
  
        <PiePagina />
      </div>
    );
  };

export default Layout;
