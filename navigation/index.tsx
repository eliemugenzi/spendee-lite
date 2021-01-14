import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import Transactions from './screens/Transactions';
import Sms from './screens/Sms';

const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Transactions} />
        <Tab.Screen name="Messages" component={Sms} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;
