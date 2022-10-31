import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

  const [proyecto, setProyecto] = useState({});

  const params = useParams();

  useEffect(() => {

    console.log(params);

    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);

    setProyecto(proyecto[0]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='page page-work'>

      <div className='mask'>

        {// eslint-disable-next-line jsx-a11y/alt-text
          <img src={"/images/" + proyecto.id + ".png"} />}

      </div>
      <div className='work-texto'>
        <h1 className='heading'>{proyecto.nombre}</h1>
        <p className='tecnologias-project'><strong>{proyecto.tecnologias}</strong></p>
        <p>{proyecto.descripcion}</p>
        <a href={proyecto.url} target="_blank" rel="noreferrer">Ir al proyecto...</a>
      </div>
    </div>
  )
}
