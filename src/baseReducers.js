const merge = (state, payload) => ({ ...state, ...payload });

export const routerReducer = history => {
  const initialState = {
    location: history.location,
    action: history.action,
  };
  return (state = initialState, { type, payload } = {}) => {
    if (type === '@@router/LOCATION_CHANGE') {
      return merge(state, payload);
    }
    return state;
  };
};

export const logoutReducer = {
  RESET_APP: () => ({}),
};
