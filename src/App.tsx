import React from 'react';
import Layout from './components/layout';
import logoSrc from './assets/logo.svg';

export default function App() {
  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Trade',
      href: '/trade',
    },
  ];

  const onSignInClick = () => {
    console.log('Hey! trying to sign in');
  };

  return (
    <Layout
      onSignInClick={onSignInClick}
      brandTitle="CoinMena"
      logoSrc={logoSrc}
      navItems={navItems}
    >
      This is layout content
    </Layout>
  );
}
