import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardPage from "../dashboard/dashboard.js";
import CharacterPage from "../characters/CharacterPage.js";
import InteractiveMap from "../interactiveMap/InteractiveMap.js";
import HertaSpin from "../hertaSpin/hertaSpin.js";
import AnotherHertaSpin from "../hertaSpin/anotherHertaSpin.js";
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
                component={InteractiveMap}
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
            <Stack.Screen
                name='Another Herta Spin'
                component={AnotherHertaSpin}
                options={{
                    orientation: 'landscape',
                    contentStyle: { backgroundColor: "transparent" },
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
