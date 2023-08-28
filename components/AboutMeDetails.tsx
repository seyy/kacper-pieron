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
import { device } from '../styles/device';

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
        <StyledSiStyledcomponents />
        <GithubIcon />
        <GitIcon />
      </IconsContainer>
    </SectionAboutMe>
  )
}

export default AboutMeDetails;

const SectionAboutMe = styled.div`
  background-color: ${theme.colors.primary.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: -1;

  @media ${device.laptop} {
    height: 600px;
  }
  @media ${device.laptopL} {
    height: 640px;
  }
  @media ${device.desktop} {
    height: 800px;
  }
  @media ${device.mobileS} {
    height: 500px;
  }
  @media ${device.mobileM} {
    height: 500px;
  }
  @media ${device.mobileL} {
    height: 700px;
  }
  @media ${device.tablet} {
    height: 470px;
  }
 `

const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 95px;
  justify-content: center;
`

const Name = styled.h1`
  color: #929291;
  font-family: 'Verdana', Geneva, Tahoma, sans-serif;
  animation: ${slideInFromLeft} 1.1s;
  text-shadow: -2px -2px 235px ${theme.colors.primary.green.mint};

  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.laptopL} {
    font-size: 45px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
  @media ${device.mobileS} {
    font-size: 26px;
  }
  @media ${device.mobileM} {
    font-size: 26px;
  }
  @media ${device.mobileL} {
    font-size: 26px;
  }
  @media ${device.tablet} {
    font-size: 29px;
  }
`

const Frontend = styled.span`
  color: #aedfce;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.32);
`

const Description = styled.p`
  color: ${theme.colors.primary.white};
  text-align: center;
  animation: ${slideInFromLeft} 1.25s;
  text-shadow: 0px 2px 77px ${theme.colors.primary.green.mint};

  @media ${device.laptop} {
    font-size: 25px;
    max-width: 70%;
    margin-top: -44px;
  }
  @media ${device.laptopL} {
    font-size: 26.5px;
    max-width: 70%;
    margin-top: 20px;
  }
  @media ${device.desktop} {
    font-size: 35px;
    max-width: 60%;
    margin-top: -101px;
  }
  @media ${device.mobileS} {
    font-size: 11px;
    max-width: 90%;
    margin-top: 162px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
    max-width: 90%;
    margin-top: 162px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    max-width: 90%;
    margin-top: 162px;
  }
  @media ${device.tablet} {
    font-size: 15px;
    max-width: 70%;
    margin-top: 2px;
  }
  `

const Stack = styled.p`
  color: ${theme.colors.primary.green.mint};
  font-family: monospace;
  font-weight: 600;
  animation: ${slideInFromLeft} 1.45s;
  text-shadow: 0px 5px 55px ${theme.colors.primary.green.mint};

  @media ${device.laptop} {
    font-size: 21px;
    margin-top: 55px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
    margin-top: 44px;
  }
  @media ${device.desktop} {
    font-size: 25px;
    margin-top: 75px;
  }
  @media ${device.mobileS} {
    font-size: 15px;
    margin-top: 80px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
    margin-top: 80px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
    margin-top: 75px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    margin-top: 40px;
  }
`

const IconsContainer = styled.div`
  animation: ${slideInFromLeft} 1.6s;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-row-gap: 15px;
  grid-column-gap: 22px;
  position: absolute;
  justify-items: center;
  align-content: center;
  svg {
    width: 30px;
  }

  @media ${device.laptop} {
    margin-top: 400px;
    svg {
      width: 55px;
    }
  }
  @media ${device.laptopL} {
    margin-top: 500px;
    svg {
      width: 60px;
    }
  }
  @media ${device.desktop} {
    margin-top: 500px;
    svg {
      width: 70px;
    }
  }
  @media ${device.mobileS} {
    top: 12px
    svg {
      width: 30px;
    }
  }
  @media ${device.mobileM} {
    top: 12px
    svg {
      width: 30px;
    }
  }
  @media ${device.mobileL} {
    top: 12px;
    svg {
      width: 30px;
    }
  }
  @media ${device.tablet} {
    margin-top: 350px;
    svg {
      width: 35px;
    }
  }
`

const StyledSiStyledcomponents = styled(SiStyledcomponents)`
  height: 30px;
  color: aliceblue;

  @media ${device.laptop} {
    height: 55px;
  }
  @media ${device.laptopL} {
    height: 60px;
  }
  @media ${device.desktop} {
    height: 70px;
  }
  @media ${device.mobileS} {
    height: 30px;
  }
  @media ${device.mobileM} {
    height: 30px;
  }
  @media ${device.mobileL} {
    height: 30px;
  }
  @media ${device.tablet} {
    height: 35px;
  }
`
