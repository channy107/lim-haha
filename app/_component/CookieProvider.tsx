'use client';

import { CookiesProvider } from 'react-cookie';

type Props = {
  children: React.ReactNode;
};

function CookieProvider({ children }: Props) {
  return <CookiesProvider>{children}</CookiesProvider>;
}

export default CookieProvider;
