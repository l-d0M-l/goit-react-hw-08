export const selectPerson = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
