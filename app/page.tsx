'use client'

import { Navigation } from "../components/Navigation";
import styled from 'styled-components';
import AboutMe from "../pages/AboutMe";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
        {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavContainer>
            <Navigation />
          </NavContainer>
          <ContentContainer>
            <section id="about">
              <AboutMe />
            </section>
            <section id="work">
              <Work />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </ContentContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
`

const Loader = styled.div`
  background-color: black;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`

