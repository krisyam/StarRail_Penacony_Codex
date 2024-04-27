import { StyleSheet, View, Pressable, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { width, height } from "../../GlobalStyles.js";
import { ModalContainer } from "../common/ModalContainer.js";
import { useNavigation } from "@react-navigation/native";

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
            containerStyle={styles.mainModalContainer}
        >
            <TouchableOpacity onPress={() => handleOpenLink('Dashboard')}>
                <Text>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOpenLink('Interactive Map')}>
                <Text>Interactive Map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOpenLink('Herta Spin')}>
                <Text>Herta Spin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOpenLink('Another Herta Spin')}>
                <Text>Another Herta Spin</Text>
            </TouchableOpacity>
        </ModalContainer>
    );
}

const styles = StyleSheet.create({
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
    logo_n_close: {
        paddingTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    closeButton: {
        padding: 10,
        // backgroundColor: 'gray',
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
});
