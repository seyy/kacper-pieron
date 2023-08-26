import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReactIcon from '../public/assets/ReactIcon'
import TailwindIcon from '../public/assets/TailwindIcon';
import JavascriptIcon from '../public/assets/JavascriptIcon';
import TypescriptIcon from '../public/assets/TypescriptIcon';
import GithubIcon from '../public/assets/GithubIcon';
import GitIcon from '../public/assets/GitIcon';
import HtmlIcon from '../public/assets/HtmlIcon';
import CssIcon from '../public/assets/CssIcon';
import { theme } from '../styles/theme';
import NextjsIcon from '../public/assets/NextjsIcon';
import { SiStyledcomponents } from 'react-icons/si'

const slideInFromLeft  = keyframes`
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AboutMeDetails = () => {
  return (
    <SectionAboutMe>
      <NameWrapper>
        <Name>KACPER PIERON</Name>
      </NameWrapper>
      <Description>
        I am a <Frontend>Frontend Developer</Frontend>, dedicated to crafting captivating digital experiences that seamlessly blend design and functionality.
      </Description>
      <Stack>MY STACK</Stack>
      <IconsContainer>
        <ReactIcon />
        <TailwindIcon />
        <TypescriptIcon />
        <NextjsIcon />
        <JavascriptIcon />
        <HtmlIcon />
        <CssIcon />
        <SiStyledcomponents color={theme.colors.primary.beige} size='30'/>
        <GithubIcon />
        <GitIcon />
      </IconsContainer>
    </SectionAboutMe>
  )
}

export default AboutMeDetails;

const Stack = styled.p`
  color: ${theme.colors.primary.green.mint};
  font-size: 15px;
  font-family: monospace;
  font-weight: 600;
  animation: ${slideInFromLeft} 1.45s;
  position: absolute;
  top: 295px;
  text-shadow: 0px 5px 55px ${theme.colors.primary.green.mint};
`

const Description = styled.p`
  color: ${theme.colors.primary.white};
  font-size: 15px;
  text-align: center;
  position: absolute;
  top: 162px;
  max-width: 90%;
  animation: ${slideInFromLeft} 1.25s;
  text-shadow: 0px 2px 77px ${theme.colors.primary.green.mint};
  `

const IconsContainer = styled.div`
  animation: ${slideInFromLeft} 1.6s;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  column-gap: 30px;
  row-gap: 15px;
  margin-top: 70%;
  justify-items: center;
  align-content: center;
`

const Frontend = styled.span`
  color: #aedfce;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.32);
`

const Name = styled.h1`
  color: #929291;
  font-size: 26px;
  font-family: 'Verdana', Geneva, Tahoma, sans-serif;
  animation: ${slideInFromLeft} 1.1s;
  text-shadow: -12px -12px 90px ${theme.colors.primary.green.mint};
`;

const SectionAboutMe = styled.div`
  background-color: ${theme.colors.primary.black};
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: -1;
`;

const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 95px;
  justify-content: center;
`;
