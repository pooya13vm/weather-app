import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon, Overlay, Button, Input} from 'react-native-elements';
import {MyContext} from './../context/weatherAppContext';
import {styles} from './styles';

const InputOverlay = () => {
  const [cityName, setCityName] = useState('');
  const context = useContext(MyContext);
  return (
    <Overlay isVisible={context.visible}>
      <View style={styles.overlayContainer}>
        <TouchableOpacity
          style={styles.overlayCloseIcon}
          onPress={() => context.closeOverlay()}>
          <Icon type="fontisto" name="close" />
        </TouchableOpacity>
        <Text style={styles.overlayTxt}>Please write name of the place:</Text>
        <Input
          placeholder="CITY"
          containerStyle={{width: 300, marginVertical: 50}}
          onChangeText={value => setCityName(value)}
        />
        <Button
          title="search"
          type="outline"
          onPress={() => {
            if (cityName !== '') {
              context.setupTheOtherCity(cityName.replace(' ', '+'));
            } else {
              console.log('Write something');
            }
          }}
        />
        {context.other ? (
          <Button
            title="Back to current location"
            type="outline"
            onPress={() => context.backToCurrent()}
            buttonStyle={{marginTop: 15}}
          />
        ) : null}
      </View>
    </Overlay>
  );
};

export default InputOverlay;
