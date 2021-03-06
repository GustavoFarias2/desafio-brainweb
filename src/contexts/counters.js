import React, { createContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

  const [counters, setCounters] = useState([]);

  const [selectedCounter, setSelectedCounter] = useState(null);

  const handleSelectCounter = (counter) => setSelectedCounter(counter);

  const handleAddCounter = (name) => {
    const counter = { id: counters.length + 1, name, value: 0 };

    setCounters((counters) => [
      ...counters,
      counter
    ]);

    handleSelectCounter(counter);
  }

  const handleDeleteCounter = (id) => {
    setCounters((counters) => counters.filter((counter) => counter.id !== id));

    handleSelectCounter(null);
  }

  const handleChangeCounterValue = (addOrSubtract) => {
    const updatedCounter = {
      ...selectedCounter,
      value: addOrSubtract ? (selectedCounter.value + 1) : (selectedCounter.value - 1)
    }

    const updatedCounters = counters.map((counter) => counter.id !== selectedCounter.id ? counter : updatedCounter);

    setSelectedCounter(updatedCounter);
    setCounters(updatedCounters);
  }

  return (
    <CounterContext.Provider value={{
      counters,
      selectedCounter,
      handleSelectCounter,
      handleAddCounter,
      handleDeleteCounter,
      handleChangeCounterValue
    }}>
      {children}
    </CounterContext.Provider>
  )

}

export default CounterContext;
