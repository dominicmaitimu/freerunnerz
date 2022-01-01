import React from 'react'
import styled from 'styled-components';

import { breakPoints } from '../../utils/useMediaQuery';

import LogoImage from './Image';

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.secondary};

  @media ${breakPoints.isMobile} {
    font-size: 0.5rem;
  }
`;

const Figure = styled.figure`
  border-color: ${p => p.theme.colors.secondary};
  box-sizing: border-box;
  margin: 0 1em 0 0;
  width: 7.5em;

  path {
    fill: ${p => p.theme.colors.secondary};
  }
  circle {
    fill: transparent;
  }

  > svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Title = styled.p`
  font-size: 2.85em;
  font-style: italic;
  font-weight: bold;
  letter-spacing: .215em;
  line-height: 1.3;
  margin: 0;
  padding-top: .18em;
  text-align: right;
  text-transform: uppercase;
`;

const Subtitle = styled.small`
  display: inherit;
  font-size: .32em;
  font-style: italic;
  font-weight: lighter;
  letter-spacing: .613em;
  padding-right: .17em;
`;

const Logo: React.VFC = () => (
  <LogoContainer>
    <Figure>
      <LogoImage />
    </Figure>
    <Title>
      Freerunnerz
      <Subtitle>
        Multimedia
      </Subtitle>
    </Title>
  </LogoContainer>
)

export default Logo;
