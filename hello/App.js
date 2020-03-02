import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const App = () => {

  const [username, setUsername] = useState("Lek")

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
    <Text>{username}</Text>
    </View>
  );
};

export default App;
