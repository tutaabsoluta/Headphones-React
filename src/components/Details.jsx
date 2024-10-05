import { detailsData } from "../data";

export const Details = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 p-8 text-black">
        {detailsData.map((detail) => (
          <div key={ detail.id } >
            <img
              src={`../public/img/${detail.imageUrl}`}
              alt={`Imagen de ${detail.title}`}
              className="w-20 h-auto"
            />
            <p>{detail.title}</p>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// Para que la imagen tenga un tamano se debe dar el width, el height
