import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../../screens/splash';
import { GetStarted } from '../../screens/getstarted';
import { NameScreen } from '../../screens/name';

export const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen
                    component={SplashScreen}
                    name="Splash"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={GetStarted}
                    name="getstart"
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    component={NameScreen}
                    name="namescreen"
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

