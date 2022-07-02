import {
  SUBMIT_IMAGE_BEGIN,
  SUBMIT_IMAGE_ERROR,
  SUBMIT_IMAGE_SUCCESS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SUBMIT_IMAGE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SUBMIT_IMAGE_SUCCESS) {
    return { ...state, isLoading: false, image: action.payload.src };
  }
  if (action.type === SUBMIT_IMAGE_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
