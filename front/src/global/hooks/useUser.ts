import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

export const userUser = () => {
  const { isLoading, error } = useSelector((state: RootState) => state.user);
  return {
    isLoading,
    error,
  };
};

export default userUser;
