'use client';

import { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';

interface IProps {
  children: ReactNode;
}

function CookieProvider({ children }: IProps) {
  return <CookiesProvider>{children}</CookiesProvider>;
}

export default CookieProvider;
