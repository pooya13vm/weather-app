import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    position: 'relative',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
  topContainer: {
    width: '90%',
    height: '45%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityNameArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  cityNameAndDate: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fefefe',
  },
  cityIcon: {
    marginRight: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#fefefe',
  },
  date: {
    fontSize: 16,
    color: '#fefefe',
  },
  addBtn: {
    width: '30%',
    alignItems: 'flex-end',
  },
  shapeAndTempArea: {
    marginTop: '20%',
    flexDirection: 'row',
  },
  shape: {
    width: 200,
  },
  tempAndDiscArea: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  tempArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '23%',
  },
  temp: {
    alignSelf: 'center',
    fontSize: 72,
    color: '#fefefe',
  },
  description: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 5,
    width: '100%',
    alignSelf: 'center',
    color: '#fefefe',
  },
  detailsArea: {
    width: '90%',
    height: '20%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailItem: {
    backgroundColor: 'rgba(15, 15, 15, 0.6)',
    width: '20%',
    height: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#999999',
  },
  detailTxt: {
    fontWeight: 'bold',
    color: '#fefefe',
  },
  bottomArea: {
    width: '90%',
    height: '35%',
    padding: 5,
  },
  bottomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '8%',
    color: '#fefefe',
  },
  forecastContainer: {
    width: '100%',
    height: '65%',
    marginTop: '5%',
    backgroundColor: 'rgba(20, 20, 20, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
  },
  forecastItem: {
    height: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '14%',
  },
  forecastTxt: {
    color: '#fefefe',
  },
  forecastDisc: {
    fontSize: 11,
    color: '#fefefe',
    marginTop: 5,
  },
  overlayContainer: {
    width: '90%',
    height: '60%',
    padding: '10%',
    justifyContent: 'space-between',
  },
  overlayTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlayCloseIcon: {
    alignItems: 'flex-end',
  },
});
