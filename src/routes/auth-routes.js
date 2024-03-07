import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LockedScreen, LoginScreen, OnBoardingScreen, SplashScreen, UnLockScreen } from '../screens';
import NavigationStrings from './NavigationStrings'

export default function AuthRoutes() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={NavigationStrings.ON_BOARDING_SCREEN} component={OnBoardingScreen} options={{ title: 'Lock' }} />
            <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={LoginScreen} options={{ title: 'Lock' }} />
        </Stack.Navigator>
    )
}