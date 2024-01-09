'use client';
import Link from 'next/link';
import useRecentVisited from '@/app/_hooks/useRecentVisited';

interface IProps {
  name: string;
  url: string;
}

export default function Tab({ name, url }: IProps) {
  const { setRecentVisitedCookie } = useRecentVisited();

  return (
    <Link
      href={url}
      onClick={() => {
        setRecentVisitedCookie({ name, url });
      }}
    >
      {name}
    </Link>
  );
}
