import React, { useContext } from 'react';

import CounterContext from '../../contexts/counters';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Counter from '../../components/Counter';

import styles from './styles';

const Counters = () => {

  const { counters, handleSelectCounter } = useContext(CounterContext);

  return (
    <ScrollView>

      <View style={styles.container}>

        {counters.length === 0 && (
          <View style={styles.container_without_counter}>
            <Text style={{
              fontSize: 18,
              color: '#444',
              textAlign: 'center'
            }}>
              You dont have counters, go to manage tab to add more!
            </Text>
          </View>
        )}

        {counters.map((counter) =>
          <TouchableOpacity
            key={counter.id}
            onPress={() => handleSelectCounter(counter)}
          >
            <Counter counter={counter} />
          </TouchableOpacity>
        )}

      </View>

    </ScrollView>
  );

}

export default Counters;
