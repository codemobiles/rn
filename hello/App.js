import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
      <TextInput placeholder="Name" />
      <Button title="RUN" />
      <Text>xxx</Text>
    </View>
  );
};

export default App;
