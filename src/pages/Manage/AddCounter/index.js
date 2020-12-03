import React, { useState, useContext } from 'react';

import CounterContext from '../../../contexts/counters';

import {
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const AddCounter = () => {

  const { handleAddCounter } = useContext(CounterContext);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue) {
      handleAddCounter(inputValue);

      Keyboard.dismiss();

      setInputValue('');
    }
    else Alert.alert('Hey!', 'please insert a name before add a counter');
  }

  return (

    <View style={styles.container}>
      <TextInput
        value={inputValue}
        style={styles.text_input}
        placeholder='Add new counter name here'
        maxLength={28}
        onChangeText={(v) => setInputValue(v)}
        onSubmitEditing={() => handleSubmit()}
      />

      <TouchableOpacity onPress={() => handleSubmit()}>
        <Ionicons name='ios-add-circle-outline' size={32} color='#5462f2' />
      </TouchableOpacity>

    </View>

  );

}

export default AddCounter;
