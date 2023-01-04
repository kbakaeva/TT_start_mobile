import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useGetUsersQuery } from '../../redux/usersApi';
import { IUserData } from '../../types/IInterfaces';
import { ListItem } from './Item';

interface Props {
  onDetail: (data: IUserData) => void;
}

export const List: FC<Props> = ({ onDetail }) => {
  const { data } = useGetUsersQuery(1);

  return (
    <FlatList
      data={data?.data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ListItem {...{ data: item, onDetail }} />}
    />
  );
};
