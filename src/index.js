import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { CounterProvider } from './contexts/counters';

import Routes from './routes';

const App = () => (
  <CounterProvider>

    <StatusBar style="auto" />

    <Routes />

  </CounterProvider>
)

export default App;
