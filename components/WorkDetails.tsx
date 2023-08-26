import React from 'react';
import { keyframes, styled } from 'styled-components';
import { theme } from '../styles/theme';
import ReactIcon from '../public/assets/ReactIcon';
import NextjsIcon from '../public/assets/NextjsIcon';
import TypescriptIcon from '../public/assets/TypescriptIcon';
import { SiStyledcomponents } from 'react-icons/si'
import GitIcon from '../public/assets/GitIcon';
import GithubIcon from '../public/assets/GithubIcon';

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
      <Text>WORK EXPERIENCE</Text>
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
            <SiStyledcomponents color={theme.colors.primary.beige} size='30'/>
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
  padding: 50px 0;
`;

const ResponsibilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`

const Text = styled.p`
  color: ${theme.colors.primary.green.mint};
  font-size: 15px;
  font-family: monospace;
  font-weight: 600;
  animation: ${slideInFromLeft} 1.75s;
  text-shadow: 0px 2px 75px ${theme.colors.primary.green.mint};
`;
const Stack = styled.p`
  color: ${theme.colors.primary.green.mint};
  font-size: 10px;
  font-family: monospace;
  font-weight: 600;
  margin-top: 10px;
  animation: ${slideInFromLeft} 1.8s;
  text-shadow: 0px 5px 55px ${theme.colors.primary.green.mint};
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
`

const PositionTitle = styled.h1`
  color: ${theme.colors.primary.beige};
  font-size: 13px;
  font-family: monospace;
  margin-top: 30px;
  animation: ${slideInFromLeft} 1.85s;
  font-weight: 600;
`;

const Company = styled.p`
  color: #c7dddc;
  font-size: 9px;
  margin-top: 5px;
  animation: ${slideInFromLeft} 1.9s;
`

const EmploymentDate = styled.p`
  color: #c7dddc;
  font-size: 8px;
  animation: ${slideInFromLeft} 1.95s;
`

const Responsibilities = styled.h1`
  font-size: 10px; 
  color: ${theme.colors.primary.beige};
  font-family: monospace;
  animation: ${slideInFromLeft} 2s;
`

const PositionTitle2 = styled.h1`
  color: ${theme.colors.primary.beige};
  font-size: 13px;
  font-family: monospace;
  margin-top: 30px;
  animation: ${slideInFromLeft} 2.05s;
  font-weight: 600;
`;

const Company2 = styled.p`
  color: #c7dddc;
  font-size: 9px;
  margin-top: 5px;
  animation: ${slideInFromLeft} 2.1s;
`
  const EmploymentDate2 = styled.p`
  color: #c7dddc;
  font-size: 8px;
  animation: ${slideInFromLeft} 2.15s;
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
`

export default WorkDetails;
