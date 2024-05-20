import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { globalStyles, width } from '../../GlobalStyles'
import { bannerImageLinks, 
    rarityImageLinks, 
    pathImageLinks, 
    elementImageLinks,
    eidolonImagePaths 
} from '../common/Data/imageLinksData'
import YoutubePlayer from "react-native-youtube-iframe";
import { Button } from '@rneui/base';

export default CharacterPage = ({ route }) => {
    const { character } = route.params
    const [playing, setPlaying] = useState(false);
    const trailerVideoId = character?.videos?.trailer ? character.videos.trailer : 'dQw4w9WgXcQ';
    const showcaseVideoId = character?.videos?.showcase ? character.videos.showcase : 'dQw4w9WgXcQ';
    const bannerImageSource = bannerImageLinks[character.name];
    const rarityImageSource = rarityImageLinks[character.rarity]
    const pathImageSource = pathImageLinks[character.path]
    const elementImageSource = elementImageLinks[character.element]
    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
    return (
        <ScrollView style={[globalStyles.flexContainer, charStyles.mainContainer]}>
            
            {character?.videos?.trailer ?
                <YoutubePlayer
                    width={width}
                    height={240}
                    play={playing}
                    videoId={trailerVideoId}
                />
                :
                <Image 
                    source={bannerImageSource}
                    style={{width: width}}
                    resizeMode='contain'
                />
            }
            <WhiteText style={charStyles.characterName}>{character.name}</WhiteText>
            <View style={[globalStyles.flexContainer,charStyles.characterInfo]}>
                <View style={globalStyles.flexRow}>
                    <WhiteText style={charStyles.characterDetails}>Rarity</WhiteText>
                    <Image source={rarityImageSource}/>
                </View>
                <View style={[globalStyles.flexRow, {marginTop: 5}]}>
                    <WhiteText style={charStyles.characterDetails}>Path</WhiteText>
                    <Image source={pathImageSource}/>
                    <WhiteText style={charStyles.characterType}>{character.path ? character.path : ''}</WhiteText>
                </View>
                <View style={[globalStyles.flexRow, {marginTop: 5}]}>
                    <WhiteText style={charStyles.characterDetails}>Combat Type</WhiteText>
                    <Image source={elementImageSource}/>
                    <WhiteText style={charStyles.characterType}>{character.element ? character.element : ''}</WhiteText>
                </View>
                <WhiteText >{character.intro}</WhiteText>
                {character?.videos?.showcase &&
                    <YoutubePlayer
                        width={width/1.1}
                        height={200}
                        play={playing}
                        videoId={showcaseVideoId}
                    />
                }
                <WhiteText style={charStyles.characterDetailsTitle}>{character.skills.basicAtk.name}</WhiteText>
                <WhiteText>{character.skills.basicAtk.description}</WhiteText>
                <WhiteText style={charStyles.characterDetailsTitle}>{character.skills.skill.name}</WhiteText>
                <WhiteText>{character.skills.skill.description}</WhiteText>
                <WhiteText style={charStyles.characterDetailsTitle}>{character.skills.ultimate.name}</WhiteText>
                <WhiteText>{character.skills.ultimate.description}</WhiteText>
                <WhiteText style={charStyles.characterDetailsTitle}>{character.skills.talent.name}</WhiteText>
                <WhiteText>{character.skills.talent.description}</WhiteText>
                <WhiteText style={charStyles.characterDetailsTitle}>{character.skills.technique.name}</WhiteText>
                <WhiteText>{character.skills.technique.description}</WhiteText>

                {character.eidolons &&
                    character.eidolons.map((item, index) => (
                        <EidolonDetails name={character.name} item={item} index={index} />
                    ))
                }
            </View>
        </ScrollView>
    )
}

function EidolonDetails({item, index, name}){
    return(
        <>  
            <Image source={eidolonImagePaths[name][index]}/>
            <WhiteText style={charStyles.characterDetailsTitle}>{item.name}</WhiteText>
            <WhiteText>{item.description}</WhiteText>
        </>
    )
}
function WhiteText(props) {
    return (
        <Text style={[globalStyles.lightText,props.style]}>
            {props.children}
        </Text>
    );
}
const charStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.75)"
    },
    characterName: {
        padding: 15,
        marginTop: 5,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 32,
    },
    characterInfo: {
        paddingLeft: 20,
    },
    characterDetailsTitle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
    },
    characterDetails: {
        fontSize: 18,
        width: '34%',
    },
    characterType:{
        fontSize: 18,
        marginLeft: 5,
    },
    trailerVideo: {
        backgroundColor: 'white',
        width: width/1.5,
        height: 300,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
    },
})