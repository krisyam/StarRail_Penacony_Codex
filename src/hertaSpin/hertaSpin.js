import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Button } from '@rneui/base'
import GlobalContext from '../common/GlobalVariables/GlobalContext'
import { useContext } from 'react'
import { useState } from 'react'
import Sound from 'react-native-sound'

export default HertaSpin = () => {
  const { language, updateLanguage } = useContext(GlobalContext);
  const [ lang, setLang ] = useState(language)
  let soundCounter = 0;

  // const en_1 = new Sound('en_1.mp3', Sound.MAIN_BUNDLE)
  // const en_2 = new Sound('en_2.mp3', Sound.MAIN_BUNDLE)
  // const en_3 = new Sound('en_3.mp3', Sound.MAIN_BUNDLE)
  // const jp_1 = new Sound('kuru1.mp3', Sound.MAIN_BUNDLE)
  // const jp_2 = new Sound('kuru2.mp3', Sound.MAIN_BUNDLE)
  // const jp_3 = new Sound('kuruto.mp3', Sound.MAIN_BUNDLE)
  // const kr_1 = new Sound('kr_1.mp3', Sound.MAIN_BUNDLE)
  // const kr_2 = new Sound('kr_2.mp3', Sound.MAIN_BUNDLE)
  // const kr_3 = new Sound('kr_3.mp3', Sound.MAIN_BUNDLE)
  // const ch_1 = new Sound('gululu.mp3', Sound.MAIN_BUNDLE)
  // const ch_2 = new Sound('gururu.mp3', Sound.MAIN_BUNDLE)

  const changeLanguage = (selectedLanguage) => {
    setLang(selectedLanguage)
    updateLanguage(selectedLanguage)
  }
  const loadSound = (name) => {
    soundCounter++;
    const sound = new Sound(name, Sound.MAIN_BUNDLE);
    console.log(sound)
    setTimeout(()=>sound.play(success => {
      if (success) {
        sound.release()
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    }),150)
  }
  const playAudio = () => {
    let randomNum
    if (lang === 'ch') {
      randomNum = Math.floor(Math.random() * 2) + 1;
    } else {
      randomNum = Math.floor(Math.random() * 3) + 1;
    }
    switch (lang) {
      case 'en':
        switch (randomNum) {
          case 1:
            loadSound('en_1.mp3');
          break;
          case 2:
            loadSound('en_2.mp3');
          break;
          case 3:
            loadSound('en_3.mp3');
          break;
        }
        break;
      case 'jp':
        switch (randomNum) {
          case 1:
            loadSound('kuru1.mp3');
          break;
          case 2:
            loadSound('kuru2.mp3');
          break;
          case 3:
            loadSound('kuruto.mp3');
          break;
        }
        break;
      case 'kr':
        switch (randomNum) {
          case 1:
            loadSound('kr_1.mp3');
          break;
          case 2:
            loadSound('kr_2.mp3');
          break;
          case 3:
            loadSound('kr_3.mp3');
          break;
        }
        break;
      case 'ch':
        switch (randomNum) {
          case 1:
            loadSound('gululu.mp3');
          break;
          case 2:
            loadSound('gururu.mp3');
          break;
        }
        break;
    }
  }
  return (
    <View>
      <Image source={require('../../assets/herta-kurukuru.gif')} />
      <Button title="Button" onPress={playAudio} />
      <Text>{lang}</Text>
      <Button title="Change Language to English" onPress={() => changeLanguage('en')} />
      <Button title="Change Language to Japanese" onPress={() => changeLanguage('jp')} />
      <Button title="Change Language to Korean" onPress={() => changeLanguage('kr')} />
      <Button title="Change Language to Chinese" onPress={() => changeLanguage('ch')} />
    </View>
  )
}
