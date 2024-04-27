import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { globalStyles } from '../../GlobalStyles'

export default InteractiveMap = () => {
  return (
    <View style={globalStyles.flexContainer}>
      <WebView
          source={{ uri: 'https://star-rail-map.appsample.com/location?names=BasicTreasure,BountifulTreasure,SpaceAnchor' }}
      />
    </View>
  )
}

const mapStyle = StyleSheet.create({

})