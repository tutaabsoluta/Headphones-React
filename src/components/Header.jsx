
export const Header = () => {
  return (
    <header>
      <div className="bg-slate-900 p-12 md:p-40">
        <div className="container xl:grid grid-cols-2 items-center justify-items-center">
        {/* Imagen */}
            <div>
                <img src="img/header.png" alt="Imagen de unos Headphones" className="mt-12 md:mt-0" />
            </div>

        {/* Contenido */}
            <div className="space-y-3">
                <p className="font-bold text-3xl text-center md:text-left">Sonido Profesional</p>
                <h1 className=" text-4xl text-center md:text-left md:text-8xl tracking-tighter bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">TechPRO</h1>
                <p className="text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit, unde dolore magnam delectus porro aut iste fuga saepe dolorem at facilis, aliquid eius esse quasi recusandae molestiae. Nisi, magni.</p>
                <p className="text-center md:text-left">Desde <span className="text-5xl font-bold">$399</span></p>
            </div>
        </div>
      </div>
    </header>
  );
}
