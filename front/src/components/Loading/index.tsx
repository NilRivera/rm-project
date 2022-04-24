import React from 'react';

type spinner = {
    loading: boolean;
}
const LoadingSpinner: any = ({ loading }: spinner) => {
  const a = 0;
  console.log('loading', loading);
  console.log(a);
  return (

    loading && (
    <div style={{
      backgroundColor: 'red', position: 'absolute', width: '100vw', height: '100vh', opacity: 0.5,
    }}
    >
      asdasdsad
    </div>
    )

  );
};
export default LoadingSpinner;
