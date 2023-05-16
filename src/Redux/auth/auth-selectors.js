export const selectIsLogin = ({ auth }) => auth.isLogin;

export const getUser = ({ auth }) => auth.user;

export const getToken = ({ auth }) => auth.token;

export const checkError = ({ auth }) => auth.error;

export const selectIsLoading = ({ auth }) => auth.isLoading;