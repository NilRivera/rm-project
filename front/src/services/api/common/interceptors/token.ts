/* eslint-disable no-param-reassign */
export default function tokenInterceptor(api) {
  const fakeToken = 'user-token';
  api.defaults.headers.Authorization = `Bearer ${fakeToken}`;
}
