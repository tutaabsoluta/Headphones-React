import { useState } from "react";
import { Error } from "./Error";

export const Newsletter = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const onEmailChange = ({ target }) => {
    const { value } = target;
    setEmail( value )
  }

  const onSubmit = ( e ) => {
    e.preventDefault();
    if ( [email].includes('') ) {
      setError( true )
    }setTimeout(() => {
      setError( false );
    }, 2000);
  }

  return (
    <section id="contact" className="container mx-auto my-12">
      <div className="flex items-center justify-center flex-col  md:flex-row text-black">
        <img
          src="img/newsletter.jpg"
          alt="A woman with some headphones"
          className="w-96"
        />

        <div className="p-4">
          <h2 className="text-center lg:text-left lg:ml-4 tracking-tighter text-3xl lg:text-5xl capitalize">Stay up to date</h2>
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
              value={ email }
              onChange={ onEmailChange }
            />
            <button onClick={ onSubmit } className="block p-4 bg-blue-500 hover:bg-blue-600 uppercase duration-300 text-white font-bold text-2xl">
              Subscribe
            </button>

            {
              error && <Error>Complete the email field</Error>
            }

          </div>
        </div>
      </div>
    </section>
  );
};
