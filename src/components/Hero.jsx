export const Hero = () => {
  return (
    <>
      <div className="md:flex">

        {/* Sección de texto */}

        <div className="md:w-1/2 p-12 bg-blue-500 text-white flex flex-col justify-center">
          <h3 className="text-5xl font-bold mb-4 text-center lg:text-left">Sobre los TechPRO</h3>{" "}
          <p className="text-lg leading-relaxed textce">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at
            explicabo esse asperiores? Aspernatur, deserunt et, consectetur hic
            accusantium harum ad asperiores aliquid debitis odit modi? Fugit
            corrupti earum saepe.
          </p>
          <div>
            <button className="bg-slate-700 p-4 rounded-lg mt-4 hover:bg-slate-900 duration-300 flex items-center justify-center w-full md:w-auto">
              More Info
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Sección de imagen */}
        <div className="md:w-1/2">
          <img
            src="../public/img/imagen-mujer.jpg"
            alt="Imagen de una mujer con audífonos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
