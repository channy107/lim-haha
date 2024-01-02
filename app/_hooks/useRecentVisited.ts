'use client';
import { useCookies } from 'react-cookie';

export interface ISetRecentVisitedCookieParam {
  name: string;
  url: string;
}

const useRecentVisited = () => {
  const [cookies, setCookie] = useCookies(['visited']);

  const setRecentVisitedCookie = (value: ISetRecentVisitedCookieParam) => {
    let newValue;

    if (!cookies.visited) {
      newValue = [value];
    } else if (cookies.visited && cookies.visited.length < 10) {
      newValue = [...cookies.visited, value];
    } else {
      newValue = [...cookies.visited, value];
      newValue.shift();
    }
    setCookie('visited', newValue);
  };

  const removeRecentVisited = (index: number) => {
    const newArray = [...cookies.visited.slice(0, index), ...cookies.visited.slice(index + 1)];

    setCookie('visited', newArray);
  };

  return { visited: cookies.visited, setRecentVisitedCookie, removeRecentVisited };
};

export default useRecentVisited;
