import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List } from '../../components/List';
import { IStackNavigation } from '../../types/IStackNavigation';
import { getStyle } from './styles';
import { IUserData } from '../../types/IInterfaces';

export const UsersScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: IStackNavigation = useNavigation();
  const onDetail = (data: IUserData) => {
    navigation.navigate('UserDetail', data);
  };

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        Список:
      </Text>
      <View style={styles.listView}>
        <List {...{ onDetail }} />
      </View>
    </View>
  );
};
