import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Icons from '../icons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import Transactions from './screens/Transactions';
import Sms from './screens/Sms';
import {IRootState} from '../redux/initialState';

const AppTabs = () => {
  const {sms}: any = useSelector((state: IRootState) => state.sms);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Transactions}
          options={{
            tabBarIcon: ({color, size}: {color: string; size: number}) => (
              <Icons.Home color={color} width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Sms}
          options={{
            tabBarIcon: ({size, color}: {size: number; color: string}) => (
              <FeatherIcon name="message-square" size={size} color={color} />
            ),
            tabBarBadge: sms.data.length > 0 ? sms.data.length : undefined,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;
