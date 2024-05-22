import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Draggable from 'react-native-draggable'
import { globalStyles, height, width } from '../../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import { characterData } from '../common/Data/characterData'

export default DashboardPage = () => {
    const navigation = useNavigation()
    const handleNavigation = (name) => {
        const char = characterData.find(data => data.name === name)
        navigation.navigate("Character Page", {character: char})
    }
    return (
        <View style={globalStyles.flexContainer}>
            <DraggableContainer title={'Characters'} maxY={160} paddingBottom={320} passedHeight={height - 400}>
                <ScrollView>
                    <View style={dashboardStyles.characterRow}>
                        <CharacterCard name={'Acheron'} handleNavigation={() => handleNavigation('Acheron')}/>
                        <CharacterCard name={'Aventurine'} handleNavigation={() => handleNavigation('Aventurine')}/>
                        <CharacterCard name={'Black Swan'} handleNavigation={() => handleNavigation('Black Swan')}/>
                    </View>
                    <View style={dashboardStyles.characterRow}>
                        <CharacterCard name={'Robin'} handleNavigation={() => handleNavigation('Robin')}/>
                        <CharacterCard name={'Gallagher'} handleNavigation={() => handleNavigation('Gallagher')}/>
                        <CharacterCard name={'Misha'} handleNavigation={() => handleNavigation('Misha')}/>
                    </View>
                    <View style={dashboardStyles.characterRow}>
                        <CharacterCard name={'Sparkle'} handleNavigation={() => handleNavigation('Sparkle')}/>
                    </View>
                </ScrollView>
            </DraggableContainer>
            <DraggableContainer title={'Story'} offset={60} maxY={100} paddingBottom={300} passedHeight={height - 350}>
                <ScrollView>
                    <Text style={globalStyles.lightText}>
                        {`
\t\t\t\tAcheron is the first person from the Penacony cast we meet – and the circumstances couldn’t be more mysterious, given that the Trailblazer falls unconscious and wakes up in a dream that features her. She professes to be a member of the Galaxy Rangers, a group that travels around the cosmos to dish out justice, but doesn’t seem to be all that concerned about her identity – “Galaxy Ranger, Acheron… This is what they call me. You can call me whatever you want.”/n
\t\t\t\tDuring that initial illusion, Acheron asks all sorts of questions, foretells many hardships and tragedies for Trailblazer, and ends up shedding tears as she kills them to send them back to reality. There is also the curious use of red text for some of Acheron’s sentences in the subtitles – perhaps connected to the “glimpse of fleeting red” she says would appear before Trailblazer when they have to make a choice. She says she’s got some memory issues, too./n
\t\t\t\tAcheron generally seems to help Trailblazer out whenever she can, but keeps her own motivations for even being on Penacony in the first place closer to her chest than anyone else. When Firefly gets killed, Acheron blames herself for not reacting quickly enough, apologizing to Trailblazer for not drawing her blade: “Sorry, I… had no choice.” A curious wording – what would have happened had she drawn her blade, and why didn’t she have a choice in the matter? Was that choice between drawing her blade or letting Firefly die?/n
\t\t\t\tShe was fighting Sam well enough without taking her sword from its sheath. Perhaps there is something to what Aventurine drops on us after that sequence – Acheron being an Emanator of The Hunt, The Destruction, or The Finality. That might explain her secrecy and perhaps her unwillingness to unleash her sword’s power. Aventurine also tells us that Acheron killed Ifrit alias Duke Inferno, leader of the Ever-Flame Mansion, énroute to Penacony. Black Swan corroborates this piece of intel, saying Acheron is “hiding everything from us” and calling her the dance’s centerpiece. Then again, they both have an interest in trying to keep us firmly in their own camp and keeping us away from Acheron (presumably having some idea about her true reason for being on Penacony)./n
                        `}
                    </Text>
                </ScrollView>
            </DraggableContainer>
            <DraggableContainer title={'About Penacony'} offset={120} maxY={30} passedHeight={height - 350}>
                <ScrollView>
                    <Text style={globalStyles.lightText}>
                        {`
\t\t\t\tPenacony, also known as the "Planet of Festivities", is a colossal structure located in the Asdana star system. It's a world that blurs the lines between reality and dreams, making it a place of endless possibilities.
\t\t\t\tThe most iconic landmark of Penacony is the soaring hotel, "The Reverie". Above the fathomless sky, The Reverie is a symbol of luxury and grandeur, and a popular vacation spot where interstellar celebrities party the days away and the affluent from diverse worlds revel in lavish ventures.
\t\t\t\tPenacony was once belonged to the IPC which was a frontier prison. It was then transformed to an interstellar transportaion hub and the gateway to the Sweetdream Paradise by The Family This transformation has changed Penacony to an experiencing unparalleled and explosive prosperity.
\t\t\t\tThe planet is divided into two main areas: Reality and Dreamscape. In the Reality area, you can witness the physical structures and inhabitants of Penacony, and in the Dreamscape, it is a realm of dreams where everything can come true. It's through the Dreampools in the hotel that guests are  transported to this dream realm.
\t\t\t\tDespite its current status as a dream city and cosmic resort, Penacony still carries the weight of its heavy past. During under the ownership of the IPC, it was a place where exiled prisoners were forced to mend the leak through which memoria seeps into the galaxy. As they labored while being exposed to memoria, the prisoners gradually discovered themselves entering a captivating shared dream world, where they obtained a single shared desire: freedom. This history adds a layer of depth and intrigue to the vibrant and dreamy facade of Penacony.
                        `}
                    </Text>
                </ScrollView>
            </DraggableContainer>
        </View>
    )

}
function DraggableContainer({ 
    children, 
    title,  
    offset,
    maxY=0,
    paddingBottom=0,
    passedHeight=0,
}) {
    return (
        <Draggable
            y={ 160 + (offset ? offset : 0)}
            minX={0}
            maxX={0}
            minY={100 + (offset ? offset : 0)}
            maxY={height * 1.9 - maxY}
            touchableOpacityProps={{ activeOpacity: 1 }}
        >
            <View style={[dashboardStyles.draggableContainer, {paddingBottom: paddingBottom}]} >
                <View style={dashboardStyles.titleContainer}>
                    <Text style={[globalStyles.lightText, dashboardStyles.title]}>{title ? title : 'No Title'}</Text>
                </View>
                <View style={{height: passedHeight}}>
                    {children}
                </View>
            </View>
        </Draggable>
    )
}
function CharacterCard({ name, handleNavigation }) {
    const links = {
        Acheron: require('../../assets/characters/Acheron.png'),
        Aventurine: require('../../assets/characters/Aventurine.png'),
        [`Black Swan`]: require('../../assets/characters/Black Swan.png'),
        Robin: require('../../assets/characters/Robin.png'),
        Gallagher: require('../../assets/characters/Gallagher.png'),
        Misha: require('../../assets/characters/Misha.png'),
        Sparkle: require('../../assets/characters/Sparkle.png'),
    }
    const imageSource = links[name];
    return (
        <TouchableOpacity style={dashboardStyles.characterContainer} onPress={handleNavigation}>
            <Image source={imageSource} />
            <Text style={dashboardStyles.characterName}>{name}</Text>
        </TouchableOpacity>
    );
}

const dashboardStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    draggableContainer: {
        width: width,
        height: height,
        padding: 20,
        backgroundColor: "#111",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderColor: "#D9D9D9",
        borderWidth: 1,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        paddingRight: 20,
        fontSize: 24,
        textAlign: 'right',
        fontWeight: "bold",
    },
    characterRow: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    characterContainer: {
        width: 110,
        // height: 200,
        borderColor: "#D9D9D9",
        borderWidth: 1,
        borderRadius: 9,
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
    },
    characterName: {
        padding: 2,
        fontSize: 14,
        textAlign: "center",
        // fontWeight: "bold",
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        color: "black",
        backgroundColor: "#D9D9D9",
    },
})