import React from 'react';
import {StatusBar} from 'react-native';
import Header from './Apps/Component/Header';
import { Provider } from 'react-redux';
import store from './Apps/Redux/store';

const App=()=>{
  return (
    <Provider store={store}>
    <>
      <StatusBar backgroundColor="blueviolet" />
      <Header />
    </>
  </Provider>
  );
}

export default App;