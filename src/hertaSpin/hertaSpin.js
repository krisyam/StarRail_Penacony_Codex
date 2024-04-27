import { View, Text } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { Image } from 'react-native'
import { Button } from '@rneui/base'
import GlobalContext from '../common/GlobalVariables/GlobalContext'
import Sound from 'react-native-sound'

export default HertaSpin = () => {
  const { language, hertaSpinCounter, updateLanguage, updateHertaSpinCounter } = useContext(GlobalContext);
  const [ lang, setLang ] = useState(language)
  const [ soundCounter, setSoundCounter ] = useState(hertaSpinCounter)

  const changeLanguage = (selectedLanguage) => {
    setLang(selectedLanguage)
    updateLanguage(selectedLanguage)
  }
  const loadSound = (name) => {
    const sound = new Sound(name, Sound.MAIN_BUNDLE);
    setTimeout(()=>sound.play(success => {
      if (success) {
        sound.release()
      }
    }),200)
  }
  const playAudio = () => {
    setSoundCounter(prev=>prev+1);
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
  useEffect(() => {
    console.log('soundCounter', soundCounter)
    let timeoutId;
    const updateCounterWithDelay = () => {
      timeoutId = setTimeout(() => {
        updateHertaSpinCounter(soundCounter);
      }, 1000);
    };
    updateCounterWithDelay();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [soundCounter]);
  return (
    <View>
      <Image source={require('../../assets/herta-kurukuru.gif')} />
      <Button title="Button" onPress={playAudio} />
      <Text>{lang}</Text>
      <Text>{soundCounter}</Text>
      <Button title="Change Language to English" onPress={() => changeLanguage('en')} />
      <Button title="Change Language to Japanese" onPress={() => changeLanguage('jp')} />
      <Button title="Change Language to Korean" onPress={() => changeLanguage('kr')} />
      <Button title="Change Language to Chinese" onPress={() => changeLanguage('ch')} />
    </View>
  )
}
