import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import { globalStyles } from '../../GlobalStyles'
import hertaSpinVideo from '../../assets/AnotherHertaSpin.mp4'
export default AnotherHertaSpin = () => {
  return (
    <View style={globalStyles.flexContainer}>
      <Video source={hertaSpinVideo}
        style={videoStyle.backgroundVideo} 
        playInBackground={true}
        preventsDisplaySleepDuringVideoPlayback={true}
        resizeMode='contain'
        repeat={true}
      />
    </View>
  )
}

const videoStyle = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})