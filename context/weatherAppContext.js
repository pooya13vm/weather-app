import React, {createContext, useState} from 'react';
import axios from 'axios';
import RNLocation from 'react-native-location';
RNLocation.configure({
  distanceFilter: 5.0,
});
export const MyContext = createContext();

export const MyProvider = props => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [status, setStatus] = useState('200');
  const [load, setLoad] = useState(false);
  const [city, setCity] = useState('London');
  const [temperature, setTemperature] = useState('20');
  const [wDesc, setWDesc] = useState('cloudy');
  const [dayNight, setDayNight] = useState('');
  const [humidity, setHumidity] = useState();
  const [cloudC, setCloudC] = useState();
  const [windSpd, setWindSpd] = useState();
  const [visibility, setVisibility] = useState();
  const [icon, setIcon] = useState('Clear');
  const [day1desc, setDay1desc] = useState('');
  const [day2desc, setDay2desc] = useState('');
  const [day3desc, setDay3desc] = useState('');
  const [day4desc, setDay4desc] = useState('');
  const [day5desc, setDay5desc] = useState('');
  const [minMax1, setMinMax1] = useState([]);
  const [minMax2, setMinMax2] = useState([]);
  const [minMax3, setMinMax3] = useState([]);
  const [minMax4, setMinMax4] = useState([]);
  const [minMax5, setMinMax5] = useState([]);
  const [visible, setVisible] = useState(false);
  const [other, setOther] = useState(false);
  const [otherCity, setOtherCity] = useState('');

  const apiSetter = () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    })
      .then(granted => {
        if (granted) {
          RNLocation.subscribeToLocationUpdates(location => {
            setLatitude(location[0].latitude);
            setLongitude(location[0].longitude);
          });
        }
      })
      .then(
        axios
          .get(
            other
              ? `https://api.openweathermap.org/data/2.5/forecast?q=${otherCity}&appid=34b89d36656b6302595a907955b293fc&units=metric`
              : `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=34b89d36656b6302595a907955b293fc&units=metric`,
            {
              headers: {
                'content-type': 'application/json',
              },
            },
          )
          .catch(e => {
            console.log(e);
            setLoad(true);
            setStatus('400');
          })
          .then(({data}) => {
            if (data.cod == '200') setLoad(true);
            // console.log(data);
            // if (
            //   data.message === 'city not found' ||
            //   data.massage === 'Nothing to geocode'
            // ) {
            // if (data.code == '400') {
            //   console.log('yes');
            //   setVisible(false);
            //   setOther(false);
            //   setMassage('nothing or wrong name');
            //   setLoad(true);
            // }
            const DATA = data.list[0];
            setCity(data.city.name);
            setTemperature(DATA.main.temp);
            setWDesc(DATA.weather[0].description);
            setHumidity(DATA.main.humidity);
            setDayNight(DATA.sys.pod);
            setCloudC(DATA.clouds.all);
            setWindSpd(DATA.wind.speed);
            setVisibility(DATA.visibility);
            setIcon(DATA.weather[0].main);
            calculateOtherDays(data.list);
          })
          .catch(error => {
            console.log(error);
            setLoad(true);
            setStatus('400');
          }),
      );
  };

  const calculateOtherDays = list => {
    let mainObj = {0: [], 1: [], 2: [], 3: [], 4: []};
    const current = Number(list[0].dt_txt.slice(8, 10));
    for (let i = 0; i < 5; i++) {
      list.map(item => {
        const justDate = Number(item.dt_txt.slice(8, 10));
        if (current + i + 1 === justDate) {
          mainObj[i].push(item.main.temp);
        }
      });
    }
    setMinMax1([Math.min(...mainObj[0]), Math.max(...mainObj[0])]);
    setMinMax2([Math.min(...mainObj[1]), Math.max(...mainObj[1])]);
    setMinMax3([Math.min(...mainObj[2]), Math.max(...mainObj[2])]);
    setMinMax4([Math.min(...mainObj[3]), Math.max(...mainObj[3])]);
    setMinMax5([Math.min(...mainObj[4]), Math.max(...mainObj[4])]);
    setDay1desc(list[8].weather[0].description);
    setDay2desc(list[16].weather[0].description);
    setDay3desc(list[24].weather[0].description);
    setDay4desc(list[32].weather[0].description);
    setDay5desc(list[39].weather[0].description);
  };

  const daysOfWeek = num => {
    const dayOfWeak = new Date().getDay();
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let result;
    if (num + dayOfWeak <= 6) {
      result = week[num + dayOfWeak];
    } else if (num + dayOfWeak == 7) {
      result = week[0];
    } else {
      result = week[num + dayOfWeak - 7];
    }
    return result;
  };

  const datePicker = () => {
    const dateOfWeak = new Date().getDay();
    let day;
    switch (dateOfWeak) {
      case 0:
        day = 'sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'friday';
        break;
      case 6:
        day = 'saturday';
        break;
    }
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    return day + '  ' + date + '-' + month + '-' + year;
  };
  const setIconName = () => {
    let iconName;
    if (dayNight === 'd') {
      switch (icon) {
        case 'Clouds':
          iconName = 'cloudy-day';
          break;
        case 'Rain':
          iconName = 'rain-day';
          break;
        case 'Clear':
          iconName = 'clear-sky-day';
          break;
        case 'Snow':
          iconName = 'snow-day';
          break;
      }
    } else {
      switch (icon) {
        case 'Clouds':
          iconName = 'cloudy-night';
          break;
        case 'Rain':
          iconName = 'rain-night';
          break;
        case 'Clear':
          iconName = 'clear-sky-night';
          break;
        case 'Snow':
          iconName = 'snow-night';
          break;
      }
    }
    return iconName;
  };

  const iconAddress = {
    'cloudy-day': require('../assets/images/cloudy-day.json'),
    'rain-day': require('../assets/images/rain-day.json'),
    'clear-sky-day': require('../assets/images/clear-sky-day.json'),
    'snow-day': require('../assets/images/snow-day.json'),
    'cloudy-night': require('../assets/images/cloudy-night.json'),
    'rain-night': require('../assets/images/rain-night.json'),
    'clear-sky-night': require('../assets/images/clear-sky-night.json'),
    'snow-night': require('../assets/images/snow-night.json'),
  };

  const smallIcons = desc => {
    let myIcon;
    if (desc.includes('clouds')) {
      myIcon = 'cloudy';
    } else if (desc.includes('clear')) {
      myIcon = 'day-sunny';
    } else if (desc.includes('rain')) {
      myIcon = 'rain';
    } else if (desc.includes('snow')) {
      myIcon = 'snow';
    }
    return myIcon;
  };
  const showOverlay = () => setVisible(true);

  const setupTheOtherCity = cityName => {
    setVisible(false);
    setOther(true);
    setOtherCity(cityName.trim());
    setLoad(false);
  };
  const backToCurrent = () => {
    setOther(false);
    setVisible(false);
  };
  const closeOverlay = () => {
    setVisible(false);
  };
  return (
    <MyContext.Provider
      value={{
        day5desc,
        day4desc,
        day3desc,
        day2desc,
        day1desc,
        minMax1,
        minMax2,
        minMax3,
        minMax4,
        minMax5,
        icon,
        visibility,
        windSpd,
        cloudC,
        humidity,
        dayNight,
        wDesc,
        temperature,
        city,
        load,
        smallIcons,
        iconAddress,
        setIconName,
        datePicker,
        daysOfWeek,
        apiSetter,
        status,
        longitude,
        visible,
        showOverlay,
        setupTheOtherCity,
        other,
        backToCurrent,
        closeOverlay,
        otherCity,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};
