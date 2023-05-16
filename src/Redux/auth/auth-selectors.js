export const isUserLogin = ({ auth }) => auth.isLogin;

export const getUser = ({ auth }) => auth.user;

export const getToken = ({ auth }) => auth.token;

export const checkError = ({ auth }) => auth.error;

export const isLoading = ({ auth }) => auth.isLoading;
