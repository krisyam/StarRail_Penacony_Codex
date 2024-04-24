import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardPage from "../dashboard/dashboard.js";
import CharacterPage from "../characters/CharacterPage.js";

const Stack = createNativeStackNavigator();

export function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={DashboardPage}
                options={{
                    contentStyle: { backgroundColor: "transparent" },
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Character Page'
                component={CharacterPage}
                options={{
                    contentStyle: { backgroundColor: "transparent" },
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
