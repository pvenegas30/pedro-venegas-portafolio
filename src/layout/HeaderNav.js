import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { Wrapper, Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon } from './NavbarElements'
import { FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaGlasses } from "react-icons/fa";
import { IconContext } from "react-icons";

export const HeaderNav = () => {


  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <Container>

        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2.3em" } }}>
            <LogoContainer>

              <div className='logo'>

                <NavLink to="/inicio">
                  <span className='loguito'>{// eslint-disable-next-line jsx-a11y/alt-text
                    <img src={"/img/logoBlue.png"} />}</span>
                </NavLink>

                <h3>Pedro Venegas</h3>

              </div>

            </LogoContainer>

            <MobileIcon onClick={() => setShowMobile(!showMobile)}>

              {
                showMobile ? <FaTimes /> : <FaBars />
              }

            </MobileIcon>


            <Menu open={showMobile}>

              <MenuItem>

                <MenuItemLink onClick={() => setShowMobile(!showMobile)} to="/inicio">
                  <div>
                    <FaHome />
                    <p>INICIO</p>
                  </div>
                </MenuItemLink>

              </MenuItem>

              <MenuItem>

                <MenuItemLink onClick={() => setShowMobile(!showMobile)} to="/portafolio">
                  <div>
                    <FaBriefcase />
                    <p>PORTAFOLIO</p>
                  </div>
                </MenuItemLink>

              </MenuItem>

              <MenuItem>

                <MenuItemLink onClick={() => setShowMobile(!showMobile)} to="/servicios">
                  <div>
                    <FaGlasses />
                    <p>SERVICIOS</p>
                  </div>
                </MenuItemLink>

              </MenuItem>

              <MenuItem>

                <MenuItemLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setShowMobile(!showMobile)}>
                  <div>
                    <FaUserAlt />
                    <p>CONTACTO</p>
                  </div>
                </MenuItemLink>

              </MenuItem>

            </Menu>
          </IconContext.Provider>
        </Wrapper>

      </Container>

    </>
  )
}