
import React from 'react';
import { useState, useRef } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';


function Calculator({ navigation }) {
  const ref = useRef();
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  let total = '';
  let math = '';
  const [data, setData] = useState([{n1: '', n2: '', result: '', math: '', equals: ''}]);
 
  const plus = () => {
    setResult(Number(input) + Number(input2));
    total = Number(input) + Number(input2);
    math = ' + ';
    setData([...data, {n1:input, n2:input2, result:total, math: math, equals: ' = ' , key: result}]);
    setInput('');
    setInput2('');
    ref.current.focus();
  }
 
  const minus = () => {
    setResult(Number(input) - Number(input2));
    total = Number(input) - Number(input2);
    math = ' - ';
    setData([...data, {n1:input, n2:input2, result:total, math: math, equals: ' = ' , key: result}]);
    setInput('');
    setInput2('');
    ref.current.focus();
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result: {result} </Text>
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={input => setInput(input)}
      value={input}
      ref={ref}
      />
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={input2 => setInput2(input2)}
      value={input2}
      />
      <View style={styles.buttons}>
        <Button onPress={plus} title= '+'/>
        <Button onPress={minus} title= '-'/>
        <Button
         title="History"
         onPress={() => navigation.navigate('History', {data})}
      />
      </View>
    </View>
  );
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons: {
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 14,
  },
  result: {
    fontSize: 16,
    margin: 2
  }
});
 

export default Calculator; 