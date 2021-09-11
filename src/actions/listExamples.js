import {
  EXAMPLE_DETAILS_FAIL,
  EXAMPLE_DETAILS_REQUEST,
  EXAMPLE_DETAILS_SUCCESS
} from '../constants/examplesConstants';
import axios from 'axios';

export const listExamples = () => async (dispatch) => {
  try {
    dispatch({ type: EXAMPLE_DETAILS_REQUEST });
    const { data } = await axios.get(
      'https://wedding-gallery-a56ce-default-rtdb.firebaseio.com/examples.json'
    );

    dispatch({ type: EXAMPLE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EXAMPLE_DETAILS_FAIL, payload: error });
  }
};
