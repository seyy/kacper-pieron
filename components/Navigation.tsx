import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { device } from '../styles/device';
import { theme } from '../styles/theme';

type MobileLinkProps = {
  href: string;
  onClick: () => void
};

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const MobileMenuItem = ({ href, children }) => (
    <MobileLink href={href} onClick={closeMobileMenu}>
      {children}
    </MobileLink>
  )

  return (
    <>
      <DesktopMenu>
        <ButtonGroup>
          <a href="#about">HOME</a>
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT ME</a>
        </ButtonGroup>
      </DesktopMenu>
      <MobileMenuToggle onClick={toggleMobileMenu}>
        <AiOutlineMenu />
      </MobileMenuToggle>
      {mobileMenuOpen && (
        <MobileMenu>
          <MobileMenuToggle onClick={toggleMobileMenu}>
            <AiOutlineClose />
          </MobileMenuToggle>
          <MobileMenuItem href="#about">HOME</MobileMenuItem>
          <MobileMenuItem href="#work">WORK</MobileMenuItem>
          <MobileMenuItem href="#contact">CONTACT ME</MobileMenuItem>
        </MobileMenu>
      )}
    </>
  );
};

const DesktopMenu = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  height: 64px;
  box-shadow: 0px 1px 6px;
  background-color: ${theme.colors.primary.white};
  @media ${device.tablet} {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  line-height: 16px;
  white-space: nowrap;
  &:hover {
    color: ${theme.colors.primary.green.mint};
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  position: absolute;
  right: 0;
  padding: 12px;
  color: ${theme.colors.primary.green.mint};
  font-size: 34px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary.beige};
    transition: ease-in-out;
    transition: 0.2s;
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    display: block;
  }
`;

const MobileMenu = styled.div`
  background-color: ${theme.colors.primary.white};
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
`;

const MobileLink = styled.a<MobileLinkProps>`
  display: block;
  padding: 15px;
  color: ${theme.colors.primary.purple.dark};
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #e4e4e4;
    color: ${theme.colors.primary.green.mint};
    transform: scaleX(1.1);
    transition: 0.2s;
  }
  cursor: pointer;
`;
