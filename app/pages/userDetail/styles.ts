import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      flex: 0.1,
    },
    backIcon: {
      transform: [{ rotateY: '180deg' }],
      width: '5%',
      alignItems: 'flex-end',
    },
    backTitle: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '500',
      color: 'grey',
    },
    title: {
      flex: 0.05,
      width: '100%',
      fontSize: 24,
      lineHeight: 28,
      fontWeight: '700',
      textAlign: 'left',
    },
    infoBlock: {
      flex: 0.15,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    img: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    content: {
      width: '75%',
      height: '100%',
      justifyContent: 'center',
    },
    subTitle: {
      width: '100%',
      fontSize: 18,
      lineHeight: 22,
      fontWeight: '600',
      height: 30,
    },
    email: {
      width: '100%',
      fontSize: 16,
      lineHeight: 20,
      fontStyle: 'italic',
      height: 28,
    },
  });
  return styles;
};
