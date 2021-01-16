import React from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Text as EvaText, ListItem, List, Divider} from '@ui-kitten/components';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import {IRootState} from '../../redux/initialState';
import dimensions from '../../dimensions';
import colors from '../../colors';

const Sms = () => {
  const {sms}: any = useSelector((state: IRootState) => state.sms);

  const styles = StyleSheet.create({
    wrapper: {
      marginHorizontal: dimensions.containerWidth * 0.1,
    },
    smsTitle: {
      marginVertical: 20,
      flexDirection: 'row',
    },
    title: {
      marginLeft: 10,
      color: colors.primary,
    },
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <View>
          <View style={styles.smsTitle}>
            <Icon name="mail" size={20} color={colors.primary} />
            <EvaText category="h6" style={styles.title}>
              Recent Messages
            </EvaText>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingBottom: dimensions.height / 3,
            }}>
            <List
              data={sms.data}
              ItemSeparatorComponent={Divider}
              renderItem={({item, index}) => (
                <ListItem
                  key={index}
                  title={item.text}
                  description={moment(item.created_at).fromNow()}
                />
              )}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Sms;
