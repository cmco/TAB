import { Box, styled } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export const FooterContainer = styled(Box)`
  display: flex;
`;

export const AboutContainer = styled(Box)`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 79px;
`;

export const LogoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 183px;
  height: 202px;
  background: #1a2a57;
  border-radius: 0px 0px 20px 20px;
  margin-bottom: 39px;
`;

export const Logo = styled(Image)`
  width: 139px;
  height: 65px;
`;

export const About = styled('p')`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 124.5%;
  letter-spacing: -0.025em;
  color: #1a2a57;
  width: 40%;
`;

export const LinksContainer = styled(Box)`
  background-color: #1a2a57;
  width: 50%;
  padding: 80px;
`;

export const LinksColumnContainer = styled(Box)`
  display: flex;
  margin-bottom: 64px;
  white-space: nowrap;
`;

export const LinksColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 117px;
`;

export const SecondaryLinksColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 53px;
`;

export const BackToTopColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: underline;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 1px;
    margin: 20px;
  }
`;

export const StyledArrowContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  width: 47px;
  border-radius: 100%;
  background-color: #ffffff;

  img {
    transform: rotate(270deg);
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 16px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const SocialsContainer = styled(Box)``;

export const SocialsText = styled('p')`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 16px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 18px;
`;

export const SocialsIcons = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const SocialsLinkContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled(Box)`
  display: flex;
`;

export const Info = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-right: 86px;
`;
