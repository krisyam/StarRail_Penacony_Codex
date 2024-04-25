import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardPage from "../dashboard/dashboard.js";
import CharacterPage from "../characters/CharacterPage.js";
import HertaSpin from "../hertaSpin/hertaSpin.js";
const Stack = createNativeStackNavigator();

export function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={DashboardPage}
                options={{
                    orientation: 'portrait',
                    contentStyle: { backgroundColor: "transparent" },
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Character Page'
                component={CharacterPage}
                options={{
                    orientation: 'portrait',
                    contentStyle: { backgroundColor: "transparent" },
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Interactive Map'
                component={CharacterPage}
                options={{
                    orientation: 'landscape',
                    contentStyle: { backgroundColor: "transparent" },
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Herta Spin'
                component={HertaSpin}
                options={{
                    orientation: 'portrait',
                    contentStyle: { backgroundColor: "transparent" },
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
