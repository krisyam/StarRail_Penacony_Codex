import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { Image } from 'react-native'
import { Button } from '@rneui/base'
import GlobalContext from '../common/GlobalVariables/GlobalContext'
import Sound from 'react-native-sound'
import { StyleSheet } from 'react-native'
import { width } from '../../GlobalStyles'
import { WhiteText } from '../characters/CharacterPage'

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
    } else if (lang === 'jp') {
      randomNum = Math.floor(Math.random() * 2.4) + 1;
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
    <ScrollView>
      <View style={{backgroundColor: 'rgba(157, 136, 211, 0.70)', paddingBottom: 40}}>
        <Image 
          source={require('../../assets/herta-kurukuru.gif')} 
          resizeMode='contain'
          style={hertaStyles.herta}
        />
        <Text style={[hertaStyles.counterText, {marginTop: 30}]}>Herta has been doing kuru for</Text>
        <Text style={[hertaStyles.counter, hertaStyles.marginTop]}>{soundCounter}</Text>
        <Text style={[hertaStyles.counterText, hertaStyles.marginTop]}>times</Text>
        <Button 
          title="Kururu?" 
          onPress={playAudio} 
          containerStyle={hertaStyles.marginTop}
          buttonStyle={hertaStyles.kururuButton}
        />
      </View>
      <View style={hertaStyles.marginTop}>
        <Text style={hertaStyles.langChangeText}>Language Change</Text>
        <View style={hertaStyles.row}>
          <Button 
            containerStyle={hertaStyles.langChangeContainer} 
            buttonStyle={hertaStyles.langChangeButton}
            title="English" 
            onPress={() => changeLanguage('en')} 
          />
          <Button 
            containerStyle={hertaStyles.langChangeContainer} 
            buttonStyle={hertaStyles.langChangeButton}
            title="Japanese" 
            onPress={() => changeLanguage('jp')} 
          />
        </View>
        <View style={hertaStyles.row}>
          <Button 
            containerStyle={hertaStyles.langChangeContainer} 
            buttonStyle={hertaStyles.langChangeButton}
            title="Korean" 
            onPress={() => changeLanguage('kr')} 
          />
          <Button 
            containerStyle={hertaStyles.langChangeContainer} 
            buttonStyle={hertaStyles.langChangeButton}
            title="Chinese" 
            onPress={() => changeLanguage('ch')} 
          />
        </View>
      </View>
    </ScrollView>
  )
}

const hertaStyles = StyleSheet.create({
  marginTop: {
    marginTop: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-around',
  },
  herta: {
    width: width/1.5,
    height: width/1.5,
    alignSelf: 'center',
    padding: 80,
    marginTop: 40,
    borderRadius: 50
  },
  counterText: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center'
  },
  counter: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
  },
  kururuButton: {
    width: width/3,
    borderRadius: 40,
    alignSelf: 'center',
    backgroundColor: '#6b5c91'
  },
  langChangeText: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    color: '#1a1624',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 60,
    backgroundColor: 'rgba(197, 197, 199, 0.85)',
  },
  langChangeContainer: {
    width: width/2.5,
    elevation: 4
  },
  langChangeButton: {
    borderRadius: 50,
    backgroundColor: '#6b5c91',
  },
})