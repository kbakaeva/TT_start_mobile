import React, { FC, useMemo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IRoute } from '../../types/IRoute';
import { IStackNavigation } from '../../types/IStackNavigation';
import { NextIcon } from '../../assets/svg/nextIcon';
import { getStyle } from './styles';

interface Props {
  route: IRoute;
}

export const UserDetail: FC<Props> = ({ route }) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: IStackNavigation = useNavigation();
  const data = route.params;

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <View style={styles.backIcon}>
          <NextIcon />
        </View>
        <Text style={styles.backTitle}>Вернуться</Text>
      </Pressable>
      <Text numberOfLines={1} style={styles.title}>
        Информация о {data.first_name}
      </Text>
      <View style={styles.infoBlock}>
        <Image
          style={styles.img}
          source={{
            uri: data.avatar,
          }}
        />
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.subTitle}>
            {data.first_name} {data.last_name}
          </Text>
          <Text numberOfLines={1} style={styles.email}>
            Email: {data.email}
          </Text>
        </View>
      </View>
    </View>
  );
};
