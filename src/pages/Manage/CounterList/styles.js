import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    height: Dimensions.get('screen').height / 3
  },
  item_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  item_name: {
    fontSize: 18,
    color: '#222'
  },
  item_value: {
    fontSize: 14,
    color: '#666'
  }
});

export default styles;
