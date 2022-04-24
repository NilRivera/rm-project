import React, { ReactNode } from 'react';
import LoadingSpinner from '../components/Loading';
import { useLoading } from '../global/hooks/useLoading';

export type WithLoadingProps = {
  children?: ReactNode;
};

function withLoading(Component: React.ComponentType<any>) {
  return function ComponentWrapper({
    children,
  }:WithLoadingProps) {
    const { loading } = useLoading();
    return (
      <>
        <LoadingSpinner loading={loading} />
        <Component>{children}</Component>
      </>
    );
  };
}

export default withLoading;
