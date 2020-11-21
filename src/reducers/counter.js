const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch(action.type) {
    case 'IncrementCount':
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default counter;
