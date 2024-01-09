import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Board({ children }: IProps) {
  return <>{children}</>;
}
