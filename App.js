/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import RunInfo from './src/components/run-info';
import RunInfoNumeric from './src/components/run-info-numeric';
import shareStyles from './src/styles/shared-styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let id = 0;

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
    };

    setInterval(() => {
      this.distanceInfo.setState({ value: Math.random() * 100 });
      this.speedInfo.setState({ value: Math.random() * 15 });
      this.directionInfo.setState({
        value: this.directionInfo === 'N' ? 'NW' : 'N',
      });
    }, 1000);
  }

  addMarker = region => {
    const now = new Date().getTime();

    if (this.state.ladAddedMarker > now - 5000) {
      return;
    }

    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: region,
          key: id++,
        },
      ],
      ladAddedMarker: now,
    });
  };

  componentWillUnmount() {
    // navigator.geolocation.stopWatch(this.state.watchId);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: 37.33307,
            longitude: -122.0324,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          onRegionChange={region => this.addMarker(region)}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker coordinate={marker.coordinate} key={marker.key} />
          ))}
        </MapView>
        <View style={styles.infoContainer}>
          <RunInfoNumeric
            unit="km"
            title="Distance"
            ref={info => {
              this.distanceInfo = info;
            }}
          />
          <RunInfoNumeric
            title="Speed"
            unit="km/h"
            ref={info => {
              this.speedInfo = info;
            }}
          />
          <RunInfo
            title="Direction"
            value="N"
            ref={info => {
              this.directionInfo = info;
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
