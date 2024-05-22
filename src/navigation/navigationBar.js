import { StyleSheet, View, Pressable, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { width, height } from "../../GlobalStyles.js";
import { ModalContainer } from "../common/ModalContainer.js";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

export default Navigation = ({
    modalVisible=false,
    setModalVisible
}) => {
    const navigation = useNavigation()
    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const handleOpenLink = (destination) => {
        navigation.navigate(destination)
        setModalVisible(false)
    }
    return (
        <ModalContainer 
            isDisplay={modalVisible}
            handleExit={handleCloseModal}
            // mainModalContainerStyle={styles.mainModalContainer}
            containerStyle={navStyles.mainModalContainer}
        >
            <TouchableOpacity 
                onPress={handleCloseModal}
                style={navStyles.closeButton}
            >
                <Icon
                    name="x"
                    type="feather"
                    color="black"
                    size={20}
                    iconStyle={{
                        marginRight: 5,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={navStyles.links} onPress={() => handleOpenLink('Dashboard')}>
                <Text style={navStyles.linksText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={navStyles.links} onPress={() => handleOpenLink('Interactive Map')}>
                <Text style={navStyles.linksText}>Interactive Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={navStyles.links} onPress={() => handleOpenLink('Herta Spin')}>
                <Text style={navStyles.linksText}>Herta Spin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={navStyles.links} onPress={() => handleOpenLink('Another Herta Spin')}>
                <Text style={navStyles.linksText}>Another Herta Spin</Text>
            </TouchableOpacity>
        </ModalContainer>
    );
}

const navStyles = StyleSheet.create({
    white_text: {
        fontSize: 16,
        color: "#fff",
        alignItems: "center",
    },
    mainModalContainer: {
        flex: 1,
        width: "50%",
        borderRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#AEAEAE",
        elevation: 50,
    },
    closeButton: {
        padding: 10,
        width: 40,
        marginTop: 20,
        marginBottom: 40,
        marginRight: 10,
        alignSelf: 'flex-end',
        // backgroundColor: 'white'
    },
    void_out_zone: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        height: height,
        width: '100%',
        // backgroundColor: 'black',
        // opacity: 0.5,
        elevation: 49,
    },
    links: {
        marginBottom: 4,
        paddingVertical: 4,
        paddingLeft: 5,
    },
    linksText: {
        fontWeight: '600',
        fontSize: 16
    }
});
