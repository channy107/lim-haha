import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Board({ children }: Props) {
  return <>{children}</>;
}
