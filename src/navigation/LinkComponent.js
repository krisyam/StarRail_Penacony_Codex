import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

function Link({ img, titleName, link, close }) {
    const navigation = useNavigation();
    return (
        <React.Fragment>
            <View style={styles.link_container}>
                <Pressable
                    style={styles.links}
                    onPress={() => {
                        close();
                        navigation.navigate(link);
                    }}
                >
                    {img}
                    <Text
                        style={[
                            styles.white_text,
                            {
                                fontSize: 13,
                                marginLeft: 20,
                                alignSelf: "center",
                            },
                        ]}
                    >
                        {titleName}
                    </Text>
                </Pressable>
            </View>
        </React.Fragment>
    );
}

export default Link;

const styles = StyleSheet.create({
    white_text: {
        fontSize: 16,
        color: "#fff",
        alignItems: "center",
    },
    link_container: {
        justifyContent: "center",
        // borderWidth: 1,
        // borderColor: 'gray',
    },
    links: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        fontSize: 12,
        color: "#fff",
        // backgroundColor: 'grey'
    },
});
