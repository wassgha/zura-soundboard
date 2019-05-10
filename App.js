import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Constants, Audio } from 'expo';
import radomColor from 'randomcolor'

import Button from './components/Button';
import Sound from './components/Sound';

const soundEffects = [
  {name: 'I don\'t give a shit', audio: require('./assets/IDontGiveAShit.mp3')},
  {name: 'Fock off', audio: require('./assets/FockOff.mp3')},
  {name: 'Oh fock off', audio: require('./assets/OhFockOff.mp3')},
  {name: 'This is focked up', audio: require('./assets/ThisIsFockedUp.mp3')},
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <Text style={styles.title}>
            Zura Soundboard
          </Text>
          <View style={styles.buttonConainer}>
            {soundEffects.map(effect => <Sound name={effect.name} audio={effect.audio} color={effect.color} />)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#222222',
    padding: 8,
    flexWrap: 'wrap'
  },
  buttonConainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
});
