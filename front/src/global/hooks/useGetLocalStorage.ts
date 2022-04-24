import { useEffect, useState } from 'react';
import { Location } from 'react-router-dom';

export const useGetLocalStorage = (key:string, location: Location) => {
  const [user, setUser] = useState<any>('');
  useEffect(() => {
    setUser(localStorage.getItem(key));
  }, [location]);
  return { user };
};
