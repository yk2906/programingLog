import React from 'react';

export const initialState = {
    language: '',
    hour: '',
    minute: '',
    date: '',
    task: ''
}
  
const InitialStateContext = React.createContext();

export default InitialStateContext;