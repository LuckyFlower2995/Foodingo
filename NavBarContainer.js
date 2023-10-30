import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PointsDisplay from './PointsDisplay';

//Screens
import HomeScreen from './HomeScreen'
import GlossaryScreen from './Glossary'
import LevelMap from './LevelMap';


//Screen Names
const homeName = 'Home';
const levelName = 'Level';
const glossaryName = 'Glossary';

const Tab = createBottomTabNavigator();

export default function NavContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } 
                        else if (rn === levelName) {
                            iconName = focused ? 'restaurant' : 'restaurant-outline'
                        }
                        else if (rn === glossaryName) {
                            iconName = focused ? 'bookmarks' : 'bookmarks-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}>
                    <Tab.Screen name = {homeName} component={(HomeScreen)}/>
                    <Tab.Screen name = {levelName} component={(LevelMap)}/>
                    <Tab.Screen name = {glossaryName} component={(GlossaryScreen)}/>
            </Tab.Navigator>
            <PointsDisplay />
        </NavigationContainer>

    )

}