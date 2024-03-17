import React from 'react';
import {StatusBar} from 'react-native';
import Header from './Apps/Component/Header';
import { Provider } from 'react-redux';
import store from './Apps/Redux/store';
import NavigateHeaders from './Apps/Component/NavigateHeaders';
import { StripeProvider } from '@stripe/stripe-react-native';


const App=()=>{
const STRIPE_KEY="pk_test_51OuEqlSBQwTu3Sdv5c1NmGfDMn9IQ9UkykIyC1wTPFOOMa4vxTDb8qxO50Ce9Akxiv8fXYHMMcZSNYzHfvqK4kAY00oXR8dc66";
  return (
    <Provider store={store}>
    <>
      <StatusBar backgroundColor="blueviolet" />
      <StripeProvider publishableKey={STRIPE_KEY}>
      <NavigateHeaders/>
      </StripeProvider>
      {/* <Header /> */}
    </>
  </Provider>
  );
}

export default App;