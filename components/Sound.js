import React, {Component} from 'react';
import { Audio } from 'expo'
import radomColor from 'randomcolor'

import Button from './Button'

export default class Sound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      color: props.color || radomColor({luminosity: 'dark'}),
      isPlaying: false
    }
  }

  componentDidMount() {
    const {audio} = this.props
    const soundObject = Audio.Sound.createAsync(audio).then(({sound}) => {
      this.setState({sound})
      sound.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
    })
  }

  onPlaybackStatusUpdate = playbackStatus => {
    if (playbackStatus.isPlaying) {
      this.setState({isPlaying: true})
    }

    if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
      this.setState({isPlaying: false})
    }
  }

  play = () => {
    const { sound } = this.state
    sound.replayAsync()
  }

  render() {
    const {name, color, isPlaying} = this.state
    return (<Button name={name} onPress={this.play} color={isPlaying ? color : '#FFFFFF22'} />)
  }
}