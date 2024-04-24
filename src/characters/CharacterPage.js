import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../../GlobalStyles'
import { bannerImageLinks, rarityImageLinks, pathImageLinks, combatTypeImageLinks } from '../common/Data/imageLinksData'

export default CharacterPage = ({ route }) => {
    const { name, rarity, path, combatType } = route.params
    console.log('name: ',name)
    const bannerImageSource = bannerImageLinks[name];
    const rarityImageSource = rarityImageLinks[rarity]
    const pathImageSource = pathImageLinks[path]
    const combatTypeImageSource = combatTypeImageLinks[combatType]
    return (
        <View style={[globalStyles.flexContainer, charStyles.mainContainer]}>
            <Image source={bannerImageSource} />
            <Text style={[globalStyles.lightText, charStyles.characterName]}>{ name ? name === 'Firefly' ? 'Firefly - Sam' : name : 'No Name'}</Text>
            <View style={[globalStyles.flexContainer, charStyles.characterInfo]}>
                <View style={globalStyles.flexRow}>
                    <Text style={[globalStyles.lightText, charStyles.characterDetails]}>Rarity</Text>
                    <Image source={rarityImageSource}/>
                </View>
                <View style={[globalStyles.flexRow, {marginTop: 5}]}>
                    <Text style={[globalStyles.lightText, charStyles.characterDetails]}>Path</Text>
                    <Image source={pathImageSource}/>
                    <Text style={[globalStyles.lightText, charStyles.characterType]}>{path ? path : ''}</Text>
                </View>
                <View style={[globalStyles.flexRow, {marginTop: 5}]}>
                    <Text style={[globalStyles.lightText, charStyles.characterDetails]}>Combat Type</Text>
                    <Image source={combatTypeImageSource}/>
                    <Text style={[globalStyles.lightText, charStyles.characterType]}>{combatType ? combatType : ''}</Text>
                </View>
                {/* <Image  */}
            </View>
        </View>
    )
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
    characterDetails: {
        fontSize: 18,
        width: '34%',
    },
    characterType:{
        fontSize: 18,
        marginLeft: 5,
    }
})