import React from 'react';
import 'react-native-gesture-handler';
import {Stack} from './src/navigations/stack/Stack';
import {Provider} from 'react-redux';
import myStore from './src/redux/MyStore';

const App = () => {
  return (
    <Provider store={myStore}>
      <Stack />
    </Provider>
  );
};
export default App;
