import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LockedScreen, UnLockScreen } from '../screens';
import NavigationStrings from './NavigationStrings'

export default function AppRoutes() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={NavigationStrings.LOCKED_SCREEN} component={LockedScreen} options={{ title: 'Lock' }} />
        </Stack.Navigator>
    )
}