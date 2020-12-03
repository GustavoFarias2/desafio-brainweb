import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button_text: {
    fontSize: 16,
    color: '#444',
    marginHorizontal: 10
  }
});

export default styles;
