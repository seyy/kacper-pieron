import React from 'react';
import { keyframes, styled } from 'styled-components';
import { theme } from '../styles/theme';
import ReactIcon from '../public/assets/ReactIcon';
import NextjsIcon from '../public/assets/NextjsIcon';
import TypescriptIcon from '../public/assets/TypescriptIcon';
import { SiStyledcomponents } from 'react-icons/si'
import GitIcon from '../public/assets/GitIcon';
import GithubIcon from '../public/assets/GithubIcon';
import { device } from '../styles/device';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const WorkDetails = () => {
  return (
    <WorkContainer>
      <TextWorkExperience>WORK EXPERIENCE</TextWorkExperience>
        <PositionTitle>Junior Frontend Developer</PositionTitle>
            <Company>Develoart</Company>
            <EmploymentDate>01.07.2023 - present</EmploymentDate>
        <ResponsibilitiesContainer>
            <Responsibilities>Coding new features</Responsibilities>
            <Responsibilities>Solving bugs</Responsibilities>
            <Responsibilities>Code reviews</Responsibilities>
            <Responsibilities>Weekly meetings</Responsibilities>
        </ResponsibilitiesContainer>
        <Stack>MAIN STACK</Stack>
        <IconsContainer>
            <ReactIcon />
            <NextjsIcon />
            <TypescriptIcon />
            <StyledSiStyledcomponents />
            <GitIcon />
            <GithubIcon />
        </IconsContainer>
        <PositionTitle2>Junior Back Office Specialist</PositionTitle2>
            <Company2>Atos</Company2>
            <EmploymentDate2>15.06.2022 - present</EmploymentDate2>
        <ResponsibilitiesContainer2>
            <Responsibilities2>Ensure data integrity and security</Responsibilities2>
            <Responsibilities2>Convert paper data to electronic format</Responsibilities2>
            <Responsibilities2>Validate data against source documents</Responsibilities2>
            <Responsibilities2>Correct errors and inconsistencies</Responsibilities2>
        </ResponsibilitiesContainer2>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  background-color: ${theme.colors.primary.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  margin-top: -1px;
  margin-bottom: -2px;
`;

const TextWorkExperience = styled.p`
  color: ${theme.colors.primary.green.mint};
  font-size: 15px;
  font-family: monospace;
  font-weight: 600;
  animation: ${slideInFromLeft} 1.75s;
  text-shadow: 0px 2px 75px ${theme.colors.primary.green.mint};

  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 28.5px;
  }
  @media ${device.desktop} {
    font-size: 35px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`

const PositionTitle = styled.h1`
  color: ${theme.colors.primary.beige};
  font-size: 13px;
  font-family: monospace;
  margin-top: 30px;
  animation: ${slideInFromLeft} 1.85s;
  font-weight: 600;

  @media ${device.laptop} {
    font-size: 21px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 29px;
  }
  @media ${device.mobileS} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 13px;
  }
  @media ${device.mobileL} {
    font-size: 13px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`

const Company = styled.p`
  color: #c7dddc;
  font-size: 9px;
  margin-top: 5px;
  animation: ${slideInFromLeft} 1.9s;

  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18.5px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
  @media ${device.mobileS} {
    font-size: 9px;
  }
  @media ${device.mobileM} {
    font-size: 9px;
  }
  @media ${device.mobileL} {
    font-size: 9px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
`

const EmploymentDate = styled.p`
  color: #c7dddc;
  font-size: 8px;
  animation: ${slideInFromLeft} 1.95s;

  @media ${device.laptop} {
    font-size: 13px;
  }
  @media ${device.laptopL} {
    font-size: 15px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 8px;
  }
  @media ${device.mobileL} {
    font-size: 8px;
  }
  @media ${device.tablet} {
    font-size: 11px;
  }
`

const ResponsibilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`

const Responsibilities = styled.h1`
  font-size: 10px; 
  color: ${theme.colors.primary.beige};
  font-family: monospace;
  animation: ${slideInFromLeft} 2s;

  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 21px;
  }
  @media ${device.desktop} {
    font-size: 23px;
  }
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 13.5px;
  }
`

const Stack = styled.p`
  color: ${theme.colors.primary.green.mint};
  font-size: 10px;
  font-family: monospace;
  font-weight: 600;
  margin-top: 10px;
  animation: ${slideInFromLeft} 1.8s;
  text-shadow: 0px 5px 55px ${theme.colors.primary.green.mint};

  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 21px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 13.5px;
  }
`

const IconsContainer = styled.div`
  animation: ${slideInFromLeft} 1.825s;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 15px;
  margin-top: 30px;
  justify-items: center;
  align-content: center;
  svg {
    width: 30px;
  }

  @media ${device.laptop} {
    svg {
      width: 55px;
    }
  }
  @media ${device.laptopL} {
    svg {
      width: 60px;
    }
  }
  @media ${device.desktop} {
    svg {
      width: 70px;
    }
  }
  @media ${device.mobileS} {
    svg {
      width: 30px;
    }
  }
  @media ${device.mobileM} {
    svg {
      width: 30px;
    }
  }
  @media ${device.mobileL} {
    svg {
      width: 30px;
    }
  }
  @media ${device.tablet} {
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
@media ${device.mobileL} {
  height: 30px;
}
@media ${device.mobileM} {
  height: 30px;
}
@media ${device.mobileS} {
  height: 30px;
}
@media ${device.tablet} {
  height: 35px;
}
`

const PositionTitle2 = styled.h1`
  color: ${theme.colors.primary.beige};
  font-size: 13px;
  font-family: monospace;
  margin-top: 30px;
  animation: ${slideInFromLeft} 2.05s;
  font-weight: 600;

  @media ${device.laptop} {
    font-size: 21px;
  }
  @media ${device.laptopL} {
    font-size: 23px;
  }
  @media ${device.desktop} {
    font-size: 29px;
  }
  @media ${device.mobileS} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 13px;
  }
  @media ${device.mobileL} {
    font-size: 13px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`

const Company2 = styled.p`
  color: #c7dddc;
  font-size: 9px;
  margin-top: 5px;
  animation: ${slideInFromLeft} 2.1s;

  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18.5px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
  @media ${device.mobileS} {
    font-size: 9px;
  }
  @media ${device.mobileM} {
    font-size: 9px;
  }
  @media ${device.mobileL} {
    font-size: 9px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
`

  const EmploymentDate2 = styled.p`
  color: #c7dddc;
  font-size: 8px;
  animation: ${slideInFromLeft} 2.15s;

  @media ${device.laptop} {
    font-size: 13px;
  }
  @media ${device.laptopL} {
    font-size: 15px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 8px;
  }
  @media ${device.mobileL} {
    font-size: 8px;
  }
  @media ${device.tablet} {
    font-size: 11px;
  }
`

const ResponsibilitiesContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`

const Responsibilities2 = styled.h1`
  font-size: 10px; 
  color: ${theme.colors.primary.beige};
  font-family: monospace;
  animation: ${slideInFromLeft} 2.2s;
  
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 21px;
  }
  @media ${device.desktop} {
    font-size: 23px;
  }
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 13.5px;
  }
`

export default WorkDetails;
