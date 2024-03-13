import React from 'react';
import {StatusBar} from 'react-native';
import Header from './Apps/Component/Header';
import { Provider } from 'react-redux';
import store from './Apps/Redux/store';
import NavigateHeaders from './Apps/Component/NavigateHeaders';

const App=()=>{
  return (
    <Provider store={store}>
    <>
      <StatusBar backgroundColor="blueviolet" />
      <NavigateHeaders/>
      {/* <Header /> */}
    </>
  </Provider>
  );
}

export default App;