import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const App = () => {
  const [account, setAccount] = useState({username: '', password: ''});

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setUsername(text)}
      />
      <Button title="RUN" />
      <Text>{JSON.stringify(account)}</Text>
    </View>
  );
};

export default App;
