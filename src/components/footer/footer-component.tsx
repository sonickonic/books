import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const FooterStyled = styled.footer`
  background-color: var(--light-green);
  text-align: center;
  padding: 2rem;
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <Typography variant="caption">Made with ❤️ by Sofia Fateyev</Typography>
    </FooterStyled>
  );
};
