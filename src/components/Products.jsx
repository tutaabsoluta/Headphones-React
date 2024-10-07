import { productsData } from "../data";

export const Products = () => {
  return (
    <main className="container mx-auto text-blue-500">
      <h2 className="tracking-tighter bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-center my-8">
        Elige los TechPRO
      </h2>

      {/* Grid para modelos */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 md:grid-flow-col">
        {/* Modelo X - Columna derecha, fila superior */}
        <div className="modelo modelo-x hover:scale-110 duration-300 mr-12">
          <h3 className="text-4xl">TechPRO X</h3>
          <p className="precio">$299</p>
        </div>

        {/* Modelo Y - Columna derecha, fila inferior */}
        <div className="modelo modelo-y hover:scale-110 duration-300 mr-12">
          <h3 className="text-4xl">TechPRO Y</h3>
          <p className="precio">$399</p>
        </div>
        {/* Modelo Z - Ocupa las dos filas de la primera columna */}
        <div className="modelo modelo-z md:row-span-2 hover:scale-110 duration-300">
          <h3 className="text-4xl">TechPRO Z</h3>
          <p className="precio">$499</p>
        </div>
      </div>
    </main>
  );
};
