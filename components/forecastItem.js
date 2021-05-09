import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';

const ForecastItem = ({dayOfWeek, iconName, dayDisc, dayTemp}) => {
  return (
    <View style={styles.forecastItem}>
      <Text style={styles.forecastTxt}>{dayOfWeek}</Text>
      <View style={{height: '35%'}}>
        <Icon name={iconName} type="fontisto" size={24} color="#fefefe" />
        <Text style={styles.forecastDisc}>{dayDisc}</Text>
      </View>
      <View>
        <Icon
          name="radio-btn-passive"
          type="fontisto"
          size={6}
          color="#fefefe"
          style={{marginLeft: 12}}
        />
        <Text style={styles.forecastTxt}>{Math.round(dayTemp[0])}</Text>
        <Text style={styles.forecastTxt}>{Math.round(dayTemp[1])}</Text>
      </View>
    </View>
  );
};

export default ForecastItem;
