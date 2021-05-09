import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';

const DetailItem = ({iconName, title, disc, measure}) => {
  return (
    <View style={styles.detailItem}>
      <Icon name={iconName} type="fontisto" size={24} color="#fefefe" />
      <Text style={styles.detailTxt}>{title}</Text>
      <Text style={styles.detailTxt}>
        {Math.round(disc)} {measure}
      </Text>
    </View>
  );
};

export default DetailItem;
