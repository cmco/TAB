import React from 'react';

import Image from 'next/image';

import Header from '../Header/Header';
import Button from '../Button/Button';

import Img1 from '../../../public/assets/Img1.jpg';
import Arrow from '../../../public/assets/Arrow.svg';

import {
  HeroContainer,
  StyledImage,
  StyledCTABanner,
  StyledContainer,
  StyledArrowContainer,
  StyledLink,
  StyledText,
} from './Hero.styles';
import FadeIn from '../SpringComponents/FadeIn/FadeIn';

const Hero = () => {
  return (
    <HeroContainer>
      <Header />
      <StyledCTABanner>
        <StyledArrowContainer>
          <Image src={Arrow} alt='Circular Arrow Down' />
        </StyledArrowContainer>
      </StyledCTABanner>
      <FadeIn>
        <StyledContainer>
          <StyledText>
            <p>
              Fuelling the future of <br />{' '}
            </p>
            <p>
              <StyledLink href='/'>
                <StyledImage src={Img1} alt='Basketball' />
                sport
              </StyledLink>
              , <StyledLink href='/'>racing</StyledLink> and{' '}
              <StyledLink href='/'>communities</StyledLink>
            </p>
            <p>in New Zealand</p>
          </StyledText>
          <Button customVariant='white'>Learn More</Button>
        </StyledContainer>
      </FadeIn>
    </HeroContainer>
  );
};

export default Hero;
