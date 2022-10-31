import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

export const ListadoTrabajos = ({ limit }) => {
  return (

    <section className='works'>
      {
        trabajos.slice(0, limit).map(trabajo => (

          <article key={trabajo.id} className="work-item">

            <div className='mask'>

              {// eslint-disable-next-line jsx-a11y/alt-text
                <img src={"/images/" + trabajo.id + ".png"} />}

            </div>
            <div className='work-text'>

              <Link to={"/proyecto/" + trabajo.id}>
                <span>{trabajo.categorias}</span>

                <h2>{trabajo.nombre}</h2>

                <h3>{trabajo.tecnologias}</h3>

              </Link>
            </div>

          </article>


        ))

      }
    </section>
  )
}
