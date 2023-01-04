import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      lineHeight: 28,
      fontWeight: '700',
      textDecorationLine: 'underline',
      flex: 0.1,
    },
    listView: {
      flex: 0.9,
      width: '100%',
      flexDirection: 'column',
    },
  });
  return styles;
};
