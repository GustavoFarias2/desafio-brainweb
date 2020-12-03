import React, { useContext } from 'react';

import CounterContext from '../../../contexts/counters';

import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const ChangeCounterValue = () => {

  const { handleChangeCounterValue } = useContext(CounterContext);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button_container}
        onPress={() => handleChangeCounterValue(false)}
      >
        <Ionicons name='ios-remove-circle-outline' size={32} color='#5462f2' />
        <Text style={styles.button_text}>
          Diminuir
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button_container}
        onPress={() => handleChangeCounterValue(true)}
      >
        <Text style={styles.button_text}>
          Aumentar
        </Text>
        <Ionicons name='ios-add-circle-outline' size={32} color='#5462f2' />
      </TouchableOpacity>

    </View>
  )

}

export default ChangeCounterValue;
