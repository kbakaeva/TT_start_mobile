import React, { FC, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { NextIcon } from '../../../assets/svg/nextIcon';
import { getStyle } from './styles';
import { IUserData } from '../../../types/IInterfaces';

interface Props {
  onDetail: (data: IUserData) => void;
  data: IUserData;
}

export const ListItem: FC<Props> = ({ onDetail, data }) => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {data.id}
      </Text>
      <Text numberOfLines={1} style={styles.name}>
        {data.first_name} {data.last_name}
      </Text>
      <Pressable
        onPress={() => onDetail(data)}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.btn]}>
        <NextIcon />
      </Pressable>
    </View>
  );
};
