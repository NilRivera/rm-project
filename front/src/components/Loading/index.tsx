import React from 'react';
import literals from '../../global/literals';
import loginIcon from '../../assets/media/logInIcon.png';
import { LoadingImage, LoadingLayout, LoadingTitle } from './styles';

type spinner = {
    loading: boolean;
}
const LoadingSpinner: any = ({ loading }: spinner) => (
  loading && (
    <LoadingLayout>
      <LoadingImage src={loginIcon} alt={literals.loadingAlt} />
      <LoadingTitle>{literals.loading}</LoadingTitle>
    </LoadingLayout>
  )
);
export default LoadingSpinner;
