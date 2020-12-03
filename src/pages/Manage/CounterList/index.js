import React, { useContext } from 'react';

import CounterContext from '../../../contexts/counters';

import {
  View,
  TouchableOpacity,
  ScrollView,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const CounterList = () => {

  const { counters, handleSelectCounter, handleDeleteCounter } = useContext(CounterContext);

  return (

    <View style={styles.container}>

      <ScrollView>
        {counters.map((counter) => (
          <TouchableOpacity
            key={counter.id}
            onPress={() => handleSelectCounter(counter)}
          >
            <View style={styles.item_container}>

              <Text style={styles.item_name}>
                {counter.name}
              </Text>

              <Text style={styles.item_value}>
                value: {counter.value}
              </Text>

              <TouchableOpacity onPress={() => handleDeleteCounter(counter.id)}>
                <Ionicons name='ios-trash' size={32} color='#f24252' />
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>

    </View>

  );

}

export default CounterList;
