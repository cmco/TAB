import { styled, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import Img1 from '../../../public/assets/Img1.jpg';

export const HeroContainer = styled(Box)`
  height: 100vh;
  position: relative;
  margin-bottom: 112px;

  &::before {
    background-image: url(${Img1.src});
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: 0;
  }
`;

export const StyledContainer = styled(Box)`
  display: flex;
  height: 95vh;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2.5% 56px 4.5%;

  button {
    margin: 0 2.5% 55px auto;
  }
`;

export const StyledCTABanner = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  left: 2.5%;
  height: calc(100vh - 97px);
  width: 128px;
  background-color: #1a2a57;
  z-index: 0;
`;

export const StyledText = styled(Box)`
  position: relative;
  font-family: 'Sofia Sans Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  text-decoration-color: #9cadcb;
  text-decoration-thickness: 3px;

  &:hover {
    text-decoration-color: #b150c5;
    color: #9cadcb;
  }
`;

export const StyledArrowContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  width: 47px;
  border-radius: 100%;
  border: 1px solid #ffffff;
  background-color: #1a2a57;
  margin-bottom: 56px;

  img {
    width: 16px;
    height: 16px;
    transform: rotate(90deg);
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(199deg)
      brightness(107%) contrast(102%);
  }
`;

export const StyledImage = styled(Image)`
  display: inline;
  width: 72px;
  height: 72px;
  border-radius: 14px;
  margin: 0 16px 0 0;
  object-fit: cover;
  border-bottom: 3px solid #9cadcb;
`;
