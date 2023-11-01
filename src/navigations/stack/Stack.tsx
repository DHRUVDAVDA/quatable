import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../../screens/splash';
import { GetStarted } from '../../screens/getstarted';
import { NameScreen } from '../../screens/name';
import { GetStarted2 } from '../../screens/getstarted2';
import { Gender } from '../../screens/gender';

export const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen
                    component={SplashScreen}
                    name="Splash"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                <Stack.Screen
                    component={GetStarted}
                    name="getstart"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                <Stack.Screen
                    component={GetStarted2}
                    name="getstart2"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                 <Stack.Screen
                    component={NameScreen}
                    name="namescreen"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                 <Stack.Screen
                    component={Gender}
                    name="gender"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

