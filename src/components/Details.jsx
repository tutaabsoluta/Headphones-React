import { detailsData } from "../data";

export const Details = () => {
  return (
    <section>
      <div className="md:flex gap-4 p-20 text-black mb12">
        { detailsData.map( detail => (
          <div key={ detail.id } className="flex mb-8 md:mb-4 flex-col items-center space-y-4" >
            <img
              src={`../public/img/${ detail.imageUrl }`}
              alt={`Imagen de ${ detail.title }`}
              className="w-20 h-auto"
            />
            <h3 className="uppercase text-2xl text-center font-bold text-blue-500">{ detail.title }</h3>
            <p className="text-center sm:first:mt-8">{ detail.description }</p>
          </div>
        )) }
      </div>
    </section>
  );
};


