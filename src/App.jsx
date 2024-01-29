import { useEffect, useState } from "react";
import { Loader } from "../src/components/Loader";
import "./App.css";
import { Acerca } from "./components/Acerca";
import { Clientes } from "./components/Clientes";
import { Footer } from "./components/Footer";
import { Nosotros } from "./components/Nosotros";
import { Profesionales } from "./components/Profesionales";
import { Inicio } from "./pages/Inicio";
function App() {
  const [loading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 6000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Inicio></Inicio>
          <Nosotros></Nosotros>
          <Profesionales></Profesionales>
          <Acerca></Acerca>
          <Clientes></Clientes>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
