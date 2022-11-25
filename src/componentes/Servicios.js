import React from 'react'
import { Link } from 'react-router-dom'

export const Servicios = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Servicios</h1>

      <section className='services'>

        <article className='service'>

          <h2>Desarrollo Web</h2>

          <p>Creo tu página web o aplicación desde cero, utilizando los lenguajes de programación más adecuados y modernos:</p>

          <ul>

            <li>HTML5.</li>
            <li>CSS3, Styled Components,
              SASS, TailWindCSS.</li>
            <li>Javascript, JQuery, Typescript.</li>
            <li>React {"&"} Redux.</li>
            <li>NodeJS.</li>
            <li>MongoDB.</li>
            <li>Firebase.</li>
            <li>SEO.</li>

          </ul>

        </article>

        <article className='service'>

          <h2>Posicionamiento {"(SEO)"}</h2>
          <p>Capacitado para la optimización en motores de búsqueda {"(SEO)"} para posicionar tu sitio web de la mejor manera en Google.</p>

        </article>

        <article className='service'>

          <h2>Creación de contenido</h2>

          <p>He trabajado para múltiples blogs de España como redactor y editor. Hecha un vistazo:</p>

          <ul>
            <li><a href='https://andro4all.com/author/pedrovenegas'>Andro4All</a></li>
            <li><a href='https://androidphoria.com/author/pedro-venegas'>AndroidPhoria</a></li>
            <li><a href='https://xombit.com/author/pedrovenegas'>Xombit</a></li>
            <li><a href='https://alfabetajuega.com/author/pedro-venegas'>Alfa Beta Juega</a></li>
            <li><a href='/'>UrbanTecno</a></li>
            <li><a href='/'>SomosXbox</a></li>
          </ul>

        </article>

      </section>

      <div className='contact-service'>
        <Link to="/contacto">Contacta conmigo...</Link>
      </div>

    </div>
  )
}
