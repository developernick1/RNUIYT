import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LockedScreen, SplashScreen, UnLockScreen } from '../screens';
import NavigationStrings from './NavigationStrings'

export default function AuthRoutes() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={NavigationStrings.SPLASH_SCREEN} component={SplashScreen} options={{ title: 'Lock' }} />
        </Stack.Navigator>
    )
}