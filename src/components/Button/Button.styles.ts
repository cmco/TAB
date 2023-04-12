import { Box, Button, css, styled } from '@mui/material';

import { ButtonProps } from '../../types/index';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'customVariant',
})<Omit<ButtonProps, 'icon'>>(
  ({ customVariant }) => css`
    display: flex;
    justify-content: space-between;
    background-color: ${customVariant === 'white' ? '#ffffff' : '#1A2A57'};
    border-radius: 100px;
    height: 62px;
    width: 217px;
    color: ${customVariant === 'white' ? '#1A2A57' : '#FFFFFF'};
    border: 1px solid #9cadcb;
    padding: 26px 21px 23px 29px;

    &:hover {
      background-color: ${customVariant === 'white' ? '#ffffff' : '#1A2A57'};
    }
  `,
);

export const StyledArrowContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'customVariant',
})<Omit<ButtonProps, 'icon'>>(
  ({ customVariant }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 28px;
    border-radius: 100%;
    background-color: ${customVariant === 'white' ? '#1A2A57' : '#FFFFFF'};

    img {
      filter: ${customVariant === 'white'
        ? 'invert(100%) sepia(0%) saturate(1426%) hue-rotate(108deg) brightness(103%) contrast(111%)'
        : 'none'};
    }
  `,
);
