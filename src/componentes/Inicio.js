import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>

        SOBRE MÍ

      </h1>

      <div className='home-text'>

        <div className='perfil'>

          {// eslint-disable-next-line jsx-a11y/alt-text
            <img src={"img/perfil.png"} />}

        </div>

        <h2>
        ¡Hola! Soy un desarrollador web Full Stack, me considero una persona creativa, responsable y con iniciativa. He obtenido mis conocimientos realizando varios cursos profesionales y siempre me encuentro aprendiendo para mejorar cada vez más mis habilidades.</h2>

      </div>

      <div className='contact-inicio'>
        <Link to="/contacto">Contacta conmigo...</Link>
      </div>

      <section className='lasts-works'>

        <Link to="/portafolio" title='Ir a portafolio'><p className='heading'>Trabajos que he hecho</p></Link>

        <div className='works'>

          <ListadoTrabajos limit="2" />

        </div>

      </section>


    </div>
  )
}
