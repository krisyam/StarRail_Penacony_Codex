import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { globalStyles, width } from '../../GlobalStyles'
import { bannerImageLinks, 
    rarityImageLinks, 
    pathImageLinks, 
    elementImageLinks,
    eidolonImagePaths, 
    skillsImagePaths
} from '../common/Data/imageLinksData'
import YoutubePlayer from "react-native-youtube-iframe";
import { Button } from '@rneui/base';
import { AccordionComponent } from '../common/Accordion';

export default CharacterPage = ({ route }) => {
    const { character } = route.params
    const trailerVideoId = character?.videos?.trailer ? character.videos.trailer : 'dQw4w9WgXcQ';
    const showcaseVideoId = character?.videos?.showcase ? character.videos.showcase : 'dQw4w9WgXcQ';
    const bannerImageSource = bannerImageLinks[character.name];
    const rarityImageSource = rarityImageLinks[character.rarity]
    const pathImageSource = pathImageLinks[character.path]
    const elementImageSource = elementImageLinks[character.element]
    return (
        <ScrollView style={[globalStyles.flexContainer, charStyles.mainContainer]}>
            {character?.videos?.trailer ? (
                <YoutubePlayer
                    width={width}
                    height={240}
                    videoId={trailerVideoId}
                />
            ) : (
                <Image
                    source={bannerImageSource}
                    style={{ width: width }}
                    resizeMode='contain'
                />
            )}
            <WhiteText style={charStyles.characterName}>{character.name}</WhiteText>
            <View style={[globalStyles.flexContainer, charStyles.characterInfo]}>
                <View style={globalStyles.flexRow}>
                    <WhiteText style={charStyles.characterDetails}>Rarity</WhiteText>
                    <Image source={rarityImageSource} />
                </View>
                <View style={[globalStyles.flexRow, { marginTop: 5 }]}>
                    <WhiteText style={charStyles.characterDetails}>Path</WhiteText>
                    <Image source={pathImageSource} />
                    <WhiteText style={charStyles.characterType}>
                        {character.path ? character.path : ''}
                    </WhiteText>
                </View>
                <View style={[globalStyles.flexRow, { marginTop: 5 }]}>
                    <WhiteText style={charStyles.characterDetails}>Combat Type</WhiteText>
                    <Image source={elementImageSource} />
                    <WhiteText style={charStyles.characterType}>
                        {character.element ? character.element : ''}
                    </WhiteText>
                </View>
                <WhiteText style={[charStyles.marginTop20, { marginBottom: 20 }]}>
                    {character.intro}
                </WhiteText>
                {character?.videos?.showcase && (
                    <YoutubePlayer
                        width={width / 1.1}
                        height={200}
                        videoId={showcaseVideoId}
                    />
                )}
                <AccordionComponent
                    title={
                        <WhiteText
                            style={{ fontWeight: '800', fontSize: 28, textAlign: 'center' }}
                        >
                            Skills
                        </WhiteText>
                    }
                    style={charStyles.moduleContainer}
                >
                    <View>
                        <SkillsDetails name={character.name} item={character.skills.basicAtk} index={0} />
                    </View>
                    <View>
                        <SkillsDetails name={character.name} item={character.skills.skill} index={1} />
                    </View>
                    <View>
                        <SkillsDetails name={character.name} item={character.skills.ultimate} index={2} />
                    </View>
                    <View>
                        <SkillsDetails name={character.name} item={character.skills.talent} index={3} />
                    </View>
                    <View>
                        <SkillsDetails name={character.name} item={character.skills.technique} index={4} />
                    </View>
                </AccordionComponent>

                <AccordionComponent
                    title={
                        <WhiteText
                            style={{ fontWeight: '800', fontSize: 28, textAlign: 'center' }}
                        >
                            Eidolons
                        </WhiteText>
                    }
                    style={charStyles.moduleContainer}
                >
                    {character.eidolons &&
                        character.eidolons.map((item, index) => (
                            <EidolonDetails name={character.name} item={item} index={index} />
                        ))}
                </AccordionComponent>
            </View>
        </ScrollView>
    );
}
function SkillsDetails({item, index, name}){
    const tag = [
        'Basic Attack',
        'Skill',
        'Ultimate',
        'Talent',
        'Technique',
    ]
    return(
        <>  
            <WhiteText style={[charStyles.marginTop20, {textAlign: 'center'}]}>{tag[index]}</WhiteText>
            <View style={globalStyles.flexRow}>
                <Image
                    style={charStyles.smallIcon}
                    source={skillsImagePaths[name][index]}
                    resizeMode='contain'
                />
                <WhiteText style={charStyles.characterDetailsTitle} numberOfLines={5}>{item.name}</WhiteText>
            </View>
            <WhiteText>{item.description}</WhiteText>
            <View style={{marginTop: 10}}>
                {item?.energyCost && <WhiteText>Energy Cost: {item?.energyCost}</WhiteText>}
                {item?.energyGeneration && <WhiteText>Energy Generation: {item?.energyGeneration}</WhiteText>}
                {item?.toughnessDamage && typeof(item?.toughnessDamage) !== 'Object' && <WhiteText>Toughness Damage: {item?.toughnessDamage}</WhiteText>}
            </View>
            
        </>
    )
}
function EidolonDetails({item, index, name}){
    return(
        <>  
            <WhiteText style={[charStyles.marginTop20, {textAlign: 'center'}]}>Eidolon {index+1}</WhiteText>
            <View style={globalStyles.flexRow}>
                <Image
                    style={charStyles.smallIcon}
                    source={eidolonImagePaths[name][index]}
                    resizeMode='contain'
                />
                <WhiteText style={charStyles.characterDetailsTitle} numberOfLines={5}>{item.name}</WhiteText>
            </View>
            <WhiteText>{item.description}</WhiteText>
        </>
    )
}
export function WhiteText(props) {
    return (
        <Text 
            style={[globalStyles.lightText,props.style]}
            numberOfLines={props.numberOfLines ? props.numberOfLines : 0}
            ellipsizeMode='tail'
        >
            {props.children}
        </Text>
    );
}
const charStyles = StyleSheet.create({
    marginTop20: {
        marginTop: 20,
    },
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
        paddingRight: 20,
        paddingBottom: 30,
    },
    smallIcon: {
        height: 40,
        width: 40,
        marginLeft: 10,
        marginRight: 20,
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
    moduleContainer: {
        backgroundColor: 'rgba(11, 11, 11, 0.90)',
        borderRadius: 20,
        padding: 20,
        margin: 2,
        marginTop: 20,
    }
})