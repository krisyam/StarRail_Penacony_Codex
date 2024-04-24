import { Text, View, Pressable, Modal } from "react-native";
import React from "react";
import { styles } from "../dashboard/static/styles";

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
                    styles.mainModalContainer,
                    styles.modalMiddlePosition,
                    mainModalContainerStyle,
                ]}
            >
                <Pressable
                    style={styles.void_out_zone}
                    onPress={() => closeModal()}
                />
                <View
                    style={[
                        styles.modalContainer,
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
