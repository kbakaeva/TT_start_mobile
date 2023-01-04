import React, { FC } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { UsersScreen } from '../pages/usersScreen';
import { UserDetail } from '../pages/userDetail';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="UsersApp"
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid,
      })}>
      <Stack.Screen
        name="UsersScreen"
        options={{
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 400 } },
            close: { animation: 'timing', config: { duration: 400 } },
          },
          cardStyle: { backgroundColor: 'white' },
        }}
        component={UsersScreen}
      />
      <Stack.Screen
        name="UserDetail"
        options={{
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 400 } },
            close: { animation: 'timing', config: { duration: 400 } },
          },
          cardStyle: { backgroundColor: 'white' },
        }}
        component={UserDetail}
      />
    </Stack.Navigator>
  );
};
