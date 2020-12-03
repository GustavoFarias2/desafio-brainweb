import React, { useContext } from 'react';

import CounterContext from '../../contexts/counters';

import {
  View,
  Text
} from 'react-native';

import styles from './styles';

const Counter = ({ counter }) => {

  const { selectedCounter } = useContext(CounterContext);

  const selected = counter === selectedCounter;

  return (

    <View style={styles.counter_container(selected)}>

      <Text style={styles.name(selected)}>
        {counter.name}
      </Text>

      <Text style={styles.value(selected)}>
        {counter.value}
      </Text>

    </View>

  );

}

export default Counter;
