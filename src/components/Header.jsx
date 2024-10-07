
export const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="bg-slate-900 p-40">
        <div className="container md:grid grid-cols-2 items-center justify-items-center">
        {/* Imagen */}
            <div>
                <img src="../public/img/header.png" alt="Imagen de unos Headphones" />
            </div>

        {/* Contenido */}
            <div className="space-y-3">
                <p className="font-bold text-3xl">Sonido Profesional</p>
                <h1 className="text-8xl tracking-tighter bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">TechPRO</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit, unde dolore magnam delectus porro aut iste fuga saepe dolorem at facilis, aliquid eius esse quasi recusandae molestiae. Nisi, magni.</p>
                <p>Desde <span className="text-5xl font-bold">$399</span></p>
            </div>
        </div>
      </div>
    </header>
  );
}
