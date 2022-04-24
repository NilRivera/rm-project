import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

const useUser = () => {
  const { isLoading, error, user } = useSelector((state: RootState) => state.user);
  return {
    isLoading,
    error,
    user,
  };
};

export default useUser;
