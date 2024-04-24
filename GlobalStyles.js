import { Dimensions, StyleSheet } from "react-native";

export const { height, width } = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
    flexContainer: {
      flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
    },
    lightText: {
        color: "#D9D9D9",
    },
    darkText: {
        color: "#000",
    },
});