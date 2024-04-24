import { StyleSheet, View, Pressable, Image } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import Link from "./LinkComponent.js";
import { width, height } from "../GlobalStyles.js";
import { Icon } from "@rneui/base";

function Navigation(props) {
    const handleCloseModal = () => {
        props.setModalVisible(false);
    };
    return (
        <>
            <Modal
                style={{ margin: 0 }}
                transparent={true}
                isVisible={props.modalVisible}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                onRequestClose={() => handleCloseModal()}
            >
                <Pressable
                    style={styles.void_out_zone}
                    onPress={() => handleCloseModal()}
                />
                <View style={styles.modalContainer}>
                    <View style={styles.logo_n_close}>
                        {/* Both logo and X */}
                        <Image
                            source={require("../../assets/icons/SmallLogo.png")}
                        />
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => handleCloseModal()}
                        >
                            <Icon
                                name="x"
                                type="feather"
                                color="white"
                                size={20}
                                iconStyle={{
                                    marginRight: 5,
                                }}
                            />
                        </Pressable>
                    </View>
                    <View>
                        <Link
                            img={
                                <Icon
                                    name="home"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="Dashboard"
                            link="Dashboard"
                            close={handleCloseModal}
                        />
                        <Link
                            img={
                                <Icon
                                    name="filetext1"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="Notes"
                            link="Notes"
                            close={handleCloseModal}
                        />
                        <Link
                            img={
                                <Icon
                                    name="calendar"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="Calendar"
                            link="Calendar"
                            close={handleCloseModal}
                        />
                        <Link
                            img={
                                <Icon
                                    name="clockcircleo"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="Schedule"
                            link="Schedule"
                            close={handleCloseModal}
                        />
                        <Link
                            img={
                                <Icon
                                    name="copy1"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="Flashcards"
                            link="Flashcards"
                            close={handleCloseModal}
                        />
                        <Link
                            img={
                                <Icon
                                    name="book"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="Quiz"
                            link="Quiz"
                            close={handleCloseModal}
                        />
                        <Link
                            img={
                                <Icon
                                    name="download"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="File Sharing"
                            link="File Sharing"
                            close={handleCloseModal}
                        />
                        <Link
                            img={
                                <Icon
                                    name="setting"
                                    type="antdesign"
                                    color="white"
                                    size={20}
                                    iconStyle={{
                                        marginRight: 5,
                                    }}
                                />
                            }
                            titleName="Settings"
                            link="Settings"
                            close={handleCloseModal}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    white_text: {
        fontSize: 16,
        color: "#fff",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        width: "50%",
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#2655AD",
        color: "#fff",
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
        width: width,
        // backgroundColor: 'black',
        // opacity: 0.5,
        elevation: 49,
    },
});
