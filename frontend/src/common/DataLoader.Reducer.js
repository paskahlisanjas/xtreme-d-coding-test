export const DataLoaderActions = {
  FETCH: 'fetch',
  FETCHED: 'fetched'
};

const DataLoaderReducer = {
  initialState: {
    loading: false,
    success: true,
    errorMessage: '',
    data: null
  },
  reducer: (state, action) => {
    switch (action.type) {
      case DataLoaderActions.FETCH:
        return { ...state, loading: true };
      case DataLoaderActions.FETCHED:
        return { data: action.data, loading: false };
      default:
        throw new Error('Unknown action type.');
    }
  }
};

export default DataLoaderReducer;