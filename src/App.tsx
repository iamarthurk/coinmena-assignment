import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import Layout from './components/layout';
import HeaderCta from './components/sign-in/header-cta';
import SignInModal from './components/sign-in/modal';
import { usePersistenceStrategy } from './hooks/usePersistUser';
import { SignInFormValues } from './types';
import { findUserByCredentials } from './utils';
import data from './users.json';
import logoSrc from './assets/logo.svg';
import queryClient from './query-client';
import BrowseAssets from './routes/browse';

export default function App() {
  const [open, setOpen] = useState(false);
  const [signInError, setSignInError] = useState<string | null>(null);
  const { login } = usePersistenceStrategy();

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
    setOpen(true);
  };

  const onCancelSignIn = () => {
    setOpen(false);
  };

  const onSignIn = ({ email, password }: SignInFormValues) => {
    const user = findUserByCredentials(data.users, email, password);

    if (typeof user !== 'undefined') {
      setOpen(false);
      setSignInError(null);
      login(user);
    } else {
      setSignInError('Something went wrong. Make sure to enter proper creds.');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout
          onSignInClick={onSignInClick}
          brandTitle="CoinMena"
          logoSrc={logoSrc}
          navItems={navItems}
          headerCtaContent={<HeaderCta onSignInClick={onSignInClick} />}
        >
          <Routes>
            <Route path="/" element={<BrowseAssets />} />
          </Routes>
        </Layout>
        <SignInModal
          signInError={signInError}
          onSignIn={onSignIn}
          open={open}
          onCancel={onCancelSignIn}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
