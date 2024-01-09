import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Thumbnail({ children }: IProps) {
  return <>{children}</>;
}
