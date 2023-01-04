import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      width: '5%',
      fontSize: 20,
      lineHeight: 24,
      color: 'grey',
    },
    name: {
      width: '75%',
      fontSize: 20,
      lineHeight: 24,
      color: 'grey',
      textAlign: 'left',
    },
    btn: {
      justifyContent: 'center',
      height: '100%',
    },
  });
  return styles;
};
