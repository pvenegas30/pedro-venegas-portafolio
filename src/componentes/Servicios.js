import React from 'react'
import { Link } from 'react-router-dom'

export const Servicios = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Servicios</h1>

      <section className='services'>

        <article className='service'>

          <h2>Desarrollo Web</h2>

          <p>Creo tu página desde cero utilizando los lenguajes de programación más adecuados y modernos:</p>

          <ul>

            <li>HTML5.</li>
            <li>CSS3 | SASS.</li>
            <li>Javascript | JQuery | Typescript.</li>
            <li>React {"&"} Redux .</li>
            <li>Nodejs.</li>
            <li>SEO.</li>

          </ul>

        </article>

        <article className='service'>

          <h2>Posicionamiento Web {"(SEO)"}</h2>
          <p>Capacitado para la optimización en motores de búsqueda {"(SEO)"} para posicionar tu sitio web de la mejor manera en Google.</p>

        </article>

        <article className='service'>

          <h2>Redacción</h2>

          <p>He trabajado para múltiples blogs de España como redactor y editor. Hecha un vistazo:</p>

          <ul>
            <li><a href='https://andro4all.com/author/pedrovenegas'>Andro4All</a></li>
            <li><a href='https://androidphoria.com/author/pedro-venegas'>AndroidPhoria</a></li>
            <li><a href='https://xombit.com/author/pedrovenegas'>Xombit</a></li>
            <li><a href='https://alfabetajuega.com/author/pedro-venegas'>Alfa Beta Juega</a></li>

          </ul>

        </article>

      </section>

      <div className='contact-service'>
        <Link to="/contacto">Contacta conmigo...</Link>
      </div>

    </div>
  )
}
