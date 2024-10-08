export const Newsletter = () => {
  return (
    <section className="container mx-auto my-12">
      <div className="flex items-center justify-center flex-col  md:flex-row text-black">
        <img
          src="../public/img/newsletter.jpg"
          alt="A woman with some headphones"
          className="w-96"
        />

        <div className="p-4">
          <h2 className="text-center lg:text-left lg:ml-4 tracking-tighter text-3xl lg:text-5xl">Recibe Actualizaciones</h2>
          <p className="mb-4 lg:ml-4 p-4 text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            debitis adipisci qui, labore facilis ipsum! .
          </p>

          <div className="flex flex-col">
            <input
              type="text"
              name="input"
              placeholder="Your Email"
              className="border-t border-x rounded-tl-lg rounded-tr-lg p-4"
            />
            <button className="block p-4 bg-blue-500 hover:bg-blue-600 uppercase duration-300 text-white font-bold text-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
