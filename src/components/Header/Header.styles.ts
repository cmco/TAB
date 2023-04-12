import { styled, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export const StyledHeader = styled(Box)`
  position: relative;
  height: 97px;
  margin: 0 2.5%;
  display: flex;
  align-items: center;
  z-index: 100;
`;

export const StyledCTA = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a2a57;
  height: 100%;
  flex-basis: 128px;
  cursor: pointer;
`;

export const Logo = styled(Image)`
  width: 96px;
  height: 45px;
`;

export const StyledHeaderLinkContainer = styled(Box)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  font-weight: 700;
`;

export const StyledHeaderLink = styled(Link)`
  font-family: 'Sofia Sans Condensed';
  color: #f5f5f5;
  text-transform: uppercase;
`;

export const StyledHeaderExternalLinkContainer = styled(Box)`
  display: flex;
  align-items: center;
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 16px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #f5f5f5;
`;

export const StyledHeaderExternalLink = styled(Link)`
  flex: 1;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 12px;
  }
`;
