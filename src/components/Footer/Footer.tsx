import Link from 'next/link';
import Image from 'next/image';

import {
  About,
  AboutContainer,
  BackToTopColumn,
  FooterContainer,
  Info,
  InfoContainer,
  LinksColumn,
  LinksColumnContainer,
  LinksContainer,
  Logo,
  LogoContainer,
  SecondaryLinksColumn,
  SocialsContainer,
  SocialsIcons,
  SocialsLinkContainer,
  SocialsText,
  StyledArrowContainer,
  StyledLink,
} from './Footer.styles';

import LogoImage from '../../../public/assets/Logo.png';
import Facebook from '../../../public/assets/Facebook.svg';
import Twitter from '../../../public/assets/Twitter.svg';
import Linkedin from '../../../public/assets/Linkedin.svg';
import Arrow from '../../../public/assets/Arrow.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <AboutContainer>
        <LogoContainer>
          <Logo src={LogoImage} alt='TAB' />
        </LogoContainer>
        <About>
          TAB NZ is deeply ingrained in New Zealand&apos;s culture, and, by
          betting with TAB NZ on racing or sport, you contribute to fueling the
          future of racing codes and sporting organisations across New Zealand.
        </About>
      </AboutContainer>
      <LinksContainer>
        <LinksColumnContainer>
          <LinksColumn>
            <StyledLink href=''>About Us</StyledLink>
            <StyledLink href=''>Social Responsibility</StyledLink>
            <StyledLink href=''>Careers</StyledLink>
            <StyledLink href=''>News</StyledLink>
            <StyledLink href=''>Grants</StyledLink>
            <StyledLink href=''>Reports</StyledLink>
            <StyledLink href=''>Contact Us</StyledLink>
          </LinksColumn>
          <LinksColumn>
            <SecondaryLinksColumn>
              <StyledLink href=''>Privacy Policy</StyledLink>
              <StyledLink href=''>Terms & Conditions</StyledLink>
            </SecondaryLinksColumn>

            <SocialsContainer>
              <SocialsText>Socials</SocialsText>
              <SocialsLinkContainer>
                <Link href=''>
                  <SocialsIcons src={Facebook} alt='Facebook' />
                </Link>
                <Link href=''>
                  <SocialsIcons src={Twitter} alt='Twitter' />
                </Link>
                <Link href=''>
                  <SocialsIcons src={Linkedin} alt='Linkedin' />
                </Link>
              </SocialsLinkContainer>
            </SocialsContainer>
          </LinksColumn>
          <BackToTopColumn onClick={() => window.scrollTo(0, 0)}>
            <StyledArrowContainer>
              <Image src={Arrow} alt='Arrow' />
            </StyledArrowContainer>
            <StyledLink href=''>Back to Top</StyledLink>
          </BackToTopColumn>
        </LinksColumnContainer>

        <InfoContainer>
          <Info>© 2023 - TAB New Zealand</Info>
          <Info>Created by The Web Guys</Info>
        </InfoContainer>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
