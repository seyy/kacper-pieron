'use client'

import { Navigation } from "../components/Navigation"
import styled from 'styled-components'
import AboutMe from "../pages/AboutMe"
import Work from "../pages/Work"
import Contact from "../pages/Contact"

export default function Home() {
  return (
    <>
    <NavContainer>
      <Navigation />
    </NavContainer>
      <section id="about">
        <AboutMe />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

const NavContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: white;
`;