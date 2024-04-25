import { Text, View, Pressable, Modal, StyleSheet } from "react-native";
import { width, height } from "../../GlobalStyles.js";
import React from "react";

export const ModalContainer = ({
    children,
    isDisplay,
    setDisplay,
    handleExit,
    mainModalContainerStyle,
    containerStyle,
}) => {
    const closeModal = () => {
        if (handleExit) {
            handleExit();
        } else if (setDisplay) {
            setDisplay(!isDisplay);
        }
    };
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isDisplay}
            onRequestClose={() => closeModal()}
        >
            <View
                style={[
                    modalStyles.mainModalContainer,
                    modalStyles.modalMiddlePosition,
                    mainModalContainerStyle,
                ]}
            >
                <Pressable
                    style={modalStyles.void_out_zone}
                    onPress={() => closeModal()}
                />
                <View
                    style={[
                        modalStyles.modalContainer,
                        { height: "auto" },
                        containerStyle,
                    ]}
                >
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const modalStyles = StyleSheet.create({
    mainModalContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: width,
        top: 0,
        elevation: 50, // Ensure a higher elevation
    },
    modalMiddlePosition: {
        justifyContent: "center",
    },
    modalContainer: {
        padding: 15,
        width: width / 1.2,
        height: height / 1.2,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 50,
    },
    void_out_zone: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        height: height,
        width: width,
        backgroundColor: "black",
        opacity: 0.5,
        elevation: 49,
    },
});
