import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';
import {
  SUBMIT_IMAGE_BEGIN,
  SUBMIT_IMAGE_SUCCESS,
  SUBMIT_IMAGE_ERROR,
} from './actions';

const initialState = {
  isLoading: false,
  image: '',
  isDragActive: null,
  showAlert: false,
  alertType: '',
  alertText: '',
};

const url = '/api/v1/';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFile = async (imageFile) => {
    dispatch({ type: SUBMIT_IMAGE_BEGIN });
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
      const {
        data: {
          image: { src },
        },
      } = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch({ type: SUBMIT_IMAGE_SUCCESS, payload: { src } });
    } catch (error) {
      dispatch({
        type: SUBMIT_IMAGE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleFile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
