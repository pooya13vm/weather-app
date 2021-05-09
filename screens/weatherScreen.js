import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {Icon} from 'react-native-elements';
import {MyContext} from './../context/weatherAppContext';
import DetailItem from './../components/detailItem';
import ForecastItem from './../components/forecastItem';
import InputOverlay from './../components/inputOverlay';
import {styles} from '../components/styles';

const WeatherScreen = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.apiSetter();
  }, [context.status, context.longitude, context.other, context.otherCity]);
  console.log(context.visible);
  return (
    <View style={styles.container}>
      {context.dayNight === 'd' ? (
        <LottieView
          source={require('../assets/images/day.json')}
          loop={false}
          autoPlay
          style={styles.bg}
          resizeMode="cover"
        />
      ) : (
        <LottieView
          source={require('../assets/images/night.json')}
          loop={false}
          autoPlay
          style={styles.bg}
          resizeMode="cover"
        />
      )}
      {context.load ? (
        <View style={{alignItems: 'center'}}>
          <View style={styles.topContainer}>
            <View style={styles.cityNameArea}>
              <View style={styles.cityNameAndDate}>
                <Text style={styles.cityName}>
                  <Icon
                    color="white"
                    name="map-marker-alt"
                    type="fontisto"
                    style={styles.cityIcon}
                  />
                  {context.city}
                </Text>
                <Text style={styles.date}>{context.datePicker()}</Text>
              </View>
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => context.showOverlay()}>
                <Icon name="plus-a" type="fontisto" size={32} color="#fefefe" />
              </TouchableOpacity>
            </View>
            <View style={styles.shapeAndTempArea}>
              <LottieView
                source={context.iconAddress[context.setIconName()]}
                autoPlay
                loop
                style={styles.shape}
              />
              <View style={styles.tempAndDiscArea}>
                <View style={styles.tempArea}>
                  <Text style={styles.temp}>
                    {Math.round(context.temperature)}
                  </Text>
                  <Icon
                    name="radio-btn-passive"
                    type="fontisto"
                    size={16}
                    color="#fefefe"
                  />
                </View>
                <Text style={styles.description}>{context.wDesc}</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailsArea}>
            <DetailItem
              iconName="wind"
              title="Wind"
              disc={context.windSpd}
              measure="km/h"
            />
            <DetailItem
              iconName="blood-drop"
              title="Humidity"
              disc={context.humidity}
              measure="%"
            />
            <DetailItem
              iconName="cloudy"
              title="Cloud cover"
              disc={context.cloudC}
              measure="%"
            />
            <DetailItem
              iconName="eye"
              title="Visibility"
              disc={context.visibility / 1000}
              measure="km"
            />
          </View>
          <View style={styles.bottomArea}>
            <Text style={styles.bottomTitle}>NEXT 5 DAYS : </Text>
            <View style={styles.forecastContainer}>
              <ForecastItem
                dayOfWeek={context.daysOfWeek(1)}
                iconName={context.smallIcons(context.day1desc)}
                dayDisc={context.day1desc}
                dayTemp={context.minMax1}
              />
              <ForecastItem
                dayOfWeek={context.daysOfWeek(2)}
                iconName={context.smallIcons(context.day2desc)}
                dayDisc={context.day2desc}
                dayTemp={context.minMax2}
              />
              <ForecastItem
                dayOfWeek={context.daysOfWeek(3)}
                iconName={context.smallIcons(context.day3desc)}
                dayDisc={context.day3desc}
                dayTemp={context.minMax3}
              />
              <ForecastItem
                dayOfWeek={context.daysOfWeek(4)}
                iconName={context.smallIcons(context.day4desc)}
                dayDisc={context.day4desc}
                dayTemp={context.minMax4}
              />
              <ForecastItem
                dayOfWeek={context.daysOfWeek(5)}
                iconName={context.smallIcons(context.day5desc)}
                dayDisc={context.day5desc}
                dayTemp={context.minMax5}
              />
            </View>
          </View>
        </View>
      ) : (
        <LottieView
          source={require('../assets/images/spinner.json')}
          loop
          autoPlay
          style={styles.cityNameAndDate}
          resizeMode="cover"
        />
      )}
      <InputOverlay />
    </View>
  );
};

export default WeatherScreen;
