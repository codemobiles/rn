import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#F00',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
      }}>
      <Button title="RUN" onPress={()=>alert("Hey")} />
      <Text
        style={{flex: 1, color: '#FFF', fontSize: 10, backgroundColor: '#000'}}>
        CodeMobiles
      </Text>

      <Text
        style={{flex: 1, color: '#FFF', fontSize: 30, backgroundColor: '#0ff'}}>
        CodeMobiles
      </Text>
      <Text
        style={{flex: 1, color: '#FFF', fontSize: 30, backgroundColor: '#000'}}>
        CodeMobiles
      </Text>

      <Text
        style={{flex: 1, color: '#FFF', fontSize: 30, backgroundColor: '#0ff'}}>
        CodeMobiles
      </Text>
    </View>
  );
};

export default App;
