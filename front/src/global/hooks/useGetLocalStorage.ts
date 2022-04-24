export const useGetLocalStorage = (key:string) => {
  const user = localStorage.getItem(key);
  return { user };
};
