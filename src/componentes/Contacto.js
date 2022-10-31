import React from 'react'
import GitHub from '../Icons/GitHub'
import LinkedIn from '../Icons/LinkedIn'
import { TitleContact } from './TitleContact'
import { FaEnvelope, FaEnvelopeOpenText } from "react-icons/fa";

export const Contacto = () => {
  return (
    <>
      <TitleContact />
      <div className='contact-email'>
        <div className='icon-email'>
          <FaEnvelope className='icon-correo' /><FaEnvelopeOpenText className='icon-open' />
          <p>pedrovenegasjob@gmail.com</p>
        </div>

      </div>

      <div className='page-contact page'>

        <div className='form-contact'>

          <form className='contact' action='mailto:pedrovenegasart@gmail.com'>

            <input type="text" placeholder='Nombre' required />
            <input type="text" placeholder='Apellido' required />
            <input type="email" placeholder='Email' required />
            <textarea placeholder='Motivo de contacto...'  required/>
            <input type="submit" value="Enviar" />

          </form>
        </div>

        <div className='redes'>
          <GitHub />
          <LinkedIn />
        </div>

      </div></>
  )
}
