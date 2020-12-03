import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';

import Counters from '../pages/Counters';
import Manage from '../pages/Manage';

const Routes = () => (

  <NavigationContainer>

    <Tab.Navigator>

      <Tab.Screen
        name="Counters"
        component={Counters}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='ios-timer' size={36} color={color} />,
          tabBarLabel: () => { }
        }}
      />

      <Tab.Screen
        name="Manage"
        component={Manage}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='ios-cog' size={36} color={color} />,
          tabBarLabel: () => { }
        }}
      />

    </Tab.Navigator>

  </NavigationContainer>

);

export default Routes;
