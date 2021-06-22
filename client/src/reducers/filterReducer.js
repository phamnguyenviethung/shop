import { PRODUCT_FILTER } from '../actions/actionsTypes';

const productReducer = (
  state = {
    select: '',
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_FILTER:
      return { select: action.payload };

    default:
      return state;
  }
};

export default productReducer;
