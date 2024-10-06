import { detailsData } from "../data";

export const Details = () => {
  return (
    <>
      <div className="md:flex gap-4 p-20 text-black">
        { detailsData.map( detail => (
          <div key={ detail.id } className="flex flex-col items-center space-y-4" >
            <img
              src={`../public/img/${ detail.imageUrl }`}
              alt={`Imagen de ${ detail.title }`}
              className="w-20 h-auto"
            />
            <p className="uppercase text-2xl text-center font-bold text-blue-500">{ detail.title }</p>
            <p className="text-center">{ detail.description }</p>
          </div>
        )) }
      </div>
    </>
  );
};

// Para que la imagen tenga un tamano se debe dar el width, el height
