import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../../screens/splash';
import { GetStarted } from '../../screens/getstarted';
import { NameScreen } from '../../screens/name';
import { GetStarted2 } from '../../screens/getstarted2';
import { Gender } from '../../screens/gender';
import { Reminder } from '../../screens/reminder';
import { Widgets } from '../../screens/widgets';
import { Feeling } from '../../screens/feeling';
import { Feeling2 } from '../../screens/feeling2';
import { Theme } from '../../screens/theme';
import { LifeArea } from '../../screens/lifearea';
import { Quotes } from '../../screens/quotes';

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
                 <Stack.Screen
                    component={Reminder}
                    name="reminder"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                <Stack.Screen
                    component={Widgets}
                    name="widgets"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                <Stack.Screen
                    component={Feeling}
                    name="feeling"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                 <Stack.Screen
                    component={Feeling2}
                    name="feeling2"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                <Stack.Screen
                    component={Theme}
                    name="theme"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                <Stack.Screen
                    component={LifeArea}
                    name="lifearea"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
                <Stack.Screen
                    component={Quotes}
                    name="quotes"
                    options={{ headerShown: false,animation:'slide_from_right' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

