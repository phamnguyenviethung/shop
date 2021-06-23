import { PRODUCT_FILTER } from '../actions/actionsTypes';

const productReducer = (
  state = {
    select: '?',
    sort: '&sort=-createdAt',
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_FILTER:
      return { select: action.payload.select, sort: action.payload.sort };

    default:
      return state;
  }
};

export default productReducer;
