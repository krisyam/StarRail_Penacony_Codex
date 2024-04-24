import { ImageBackground, StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GlobalProvider from "./src/common/GlobalVariables/GlobalProvider.js";
import { useState } from 'react';
import { MainNavigator } from './src/navigation/MainNavigator.js';
import { globalStyles } from './GlobalStyles.js';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <GlobalProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#ccc"/>
        <ImageBackground source={require("./assets/background_image.png")} style={globalStyles.flexContainer}>
        {/* <Navigation
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
        /> */}
        <MainNavigator />
            {/* <Text>{`\t\tAcheron is the first person from the Penacony cast we meet – and the circumstances couldn’t be more mysterious, given that the Trailblazer falls unconscious and wakes up in a dream that features her. She professes to be a member of the Galaxy Rangers, a group that travels around the cosmos to dish out justice, but doesn’t seem to be all that concerned about her identity – “Galaxy Ranger, Acheron… This is what they call me. You can call me whatever you want.”\n
\t\tDuring that initial illusion, Acheron asks all sorts of questions, foretells many hardships and tragedies for Trailblazer, and ends up shedding tears as she kills them to send them back to reality. There is also the curious use of red text for some of Acheron’s sentences in the subtitles – perhaps connected to the “glimpse of fleeting red” she says would appear before Trailblazer when they have to make a choice. She says she’s got some memory issues, too.\n
\t\tAcheron generally seems to help Trailblazer out whenever she can, but keeps her own motivations for even being on Penacony in the first place closer to her chest than anyone else. When Firefly gets killed, Acheron blames herself for not reacting quickly enough, apologizing to Trailblazer for not drawing her blade: “Sorry, I… had no choice.” A curious wording – what would have happened had she drawn her blade, and why didn’t she have a choice in the matter? Was that choice between drawing her blade or letting Firefly die?\n
\t\tShe was fighting Sam well enough without taking her sword from its sheath. Perhaps there is something to what Aventurine drops on us after that sequence – Acheron being an Emanator of The Hunt, The Destruction, or The Finality. That might explain her secrecy and perhaps her unwillingness to unleash her sword’s power. Aventurine also tells us that Acheron killed Ifrit alias Duke Inferno, leader of the Ever-Flame Mansion, énroute to Penacony. Black Swan corroborates this piece of intel, saying Acheron is “hiding everything from us” and calling her the dance’s centerpiece. Then again, they both have an interest in trying to keep us firmly in their own camp and keeping us away from Acheron (presumably having some idea about her true reason for being on Penacony).\n
            `}</Text> */}
          </ImageBackground>
      </NavigationContainer>
    </GlobalProvider>
  );
}