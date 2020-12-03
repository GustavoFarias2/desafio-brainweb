import React, { useContext } from 'react';

import CounterContext from '../../contexts/counters';

import {
  View,
  Text
} from 'react-native';

import AddCounter from './AddCounter';
import CounterList from './CounterList';
import Counter from '../../components/Counter';
import ChangeCounterValue from './ChangeCounterValue';

import styles from './styles';

const Manage = () => {

  const { selectedCounter } = useContext(CounterContext);

  return (

    <View style={styles.container}>

      <Text style={styles.title}> Counters </Text>

      <AddCounter />

      <CounterList />

      {selectedCounter && (
        <>
          <Text style={styles.title}> Selected counter </Text>

          <Counter counter={selectedCounter} />

          <ChangeCounterValue />
        </>
      )}

    </View>

  );

}

export default Manage;
