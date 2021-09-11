import {
  EXAMPLE_DETAILS_FAIL,
  EXAMPLE_DETAILS_REQUEST,
  EXAMPLE_DETAILS_SUCCESS
} from '../constants/examplesConstants';

export const exampleDetailsReducer = (state = { examples: [] }, action) => {
  switch (action.type) {
    case EXAMPLE_DETAILS_REQUEST:
      return { loading: true, examples: [] };
    case EXAMPLE_DETAILS_SUCCESS:
      return { loading: false, examples: action.payload };
    case EXAMPLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
