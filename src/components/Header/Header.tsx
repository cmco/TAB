import Image from 'next/image';

import {
  StyledHeader,
  StyledHeaderLinkContainer,
  StyledHeaderLink,
  StyledHeaderExternalLinkContainer,
  StyledHeaderExternalLink,
  StyledCTA,
  Logo,
} from './Header.styles';

import LogoImage from '../../../public/assets/Logo.png';
import ExternalArrow from '../../../public/assets/ExternalArrow.svg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledCTA>
        <Logo src={LogoImage} alt='TAB' />
      </StyledCTA>
      <StyledHeaderLinkContainer>
        <StyledHeaderLink href=''>About Us</StyledHeaderLink>
        <StyledHeaderLink href=''>Social Responsibility</StyledHeaderLink>
        <StyledHeaderLink href=''>Careers</StyledHeaderLink>
        <StyledHeaderLink href=''>Grants</StyledHeaderLink>
        <StyledHeaderLink href=''>Reports</StyledHeaderLink>
      </StyledHeaderLinkContainer>
      <StyledHeaderExternalLinkContainer>
        <StyledHeaderExternalLink href=''>
          <span>tab.co.nz</span>
          <Image src={ExternalArrow} alt='External Link' />
        </StyledHeaderExternalLink>
      </StyledHeaderExternalLinkContainer>
    </StyledHeader>
  );
};

export default Header;
