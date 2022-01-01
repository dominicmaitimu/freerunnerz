import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import Logo from '../components/Logo/Logo';
import { tPrimary } from '../styles/theme';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Link = styled.a`
  color: ${p => p.theme.colors.secondary};
  font-size: .8em;
  font-weight: lighter;
  letter-spacing: .15em;
  padding-bottom: .5em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &:after {
    content: "";
    bottom: 0;
    border-bottom: 2px solid;
    position: absolute;
    width: 0;
    left: 0;
    opacity: 0;
    transition: opacity 600ms ease, width 600ms ease;
  }

  &:hover {
    &:after {
      opacity: 1;
      width: calc(100% - .15em);
    }
  }
`;

 const Menu = styled.nav`
  display: flex;
  position: fixed;
  right: 2.45em;
  top: 2.45em;

  ${Link} {
    margin-right: 2.3em;
    &:last-child {
      margin: 0;
    }
  }
`;

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Freerunnerz Multimedia | Freelance Software Engineer</title>
      <meta name="description" content="Software Engineering" />
      <meta name="keywords" content="Freelance, Front-end, React, Vue, PHP, Java" />
      <meta name="msapplication-TileColor" content={tPrimary.colors.primary} />
      <meta name="theme-color" content={tPrimary.colors.primary} />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="manifest" href="/images/site.webmanifest" />
      <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color={tPrimary.colors.primary} />
    </Head>

    <Menu>
      <Link href="https://www.linkedin.com/in/dominicmaitimu/" title="LinkedIn" target="_blank">LinkedIn</Link>
    </Menu>

    <Logo />
  </Container>
);

export default Home;
