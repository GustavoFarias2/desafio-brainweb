import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  counter_container: (selected) => ({
    width: '100%',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#c6f731',
    borderWidth: selected ? 2 : 0
  }),
  name: (selected) => ({
    fontSize: 18,
    color: selected ? '#444' : '#bbb',
    marginBottom: 5
  }),
  value: (selected) => ({
    fontSize: 22,
    color: selected ? '#222' : '#bbb',
    textAlign: 'right'
  })
});

export default styles;
