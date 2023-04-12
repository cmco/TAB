import Image from 'next/image';

import { StyledArrowContainer, StyledButton } from './Button.styles';

import Arrow from '../../../public/assets/Arrow.svg';

import { ButtonProps } from '../../types/index';

const Button = ({ customVariant, children }: ButtonProps) => {
  return (
    <StyledButton
      customVariant={customVariant}
      endIcon={
        <StyledArrowContainer customVariant={customVariant}>
          <Image src={Arrow} alt='Arrow' />
        </StyledArrowContainer>
      }>
      {children}
    </StyledButton>
  );
};

export default Button;
