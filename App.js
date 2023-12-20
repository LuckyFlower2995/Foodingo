import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import AssessmentScreen from './AssessmentScreen';
import MiniQuiz from './MiniQuiz';
// import DifficultySelection from './DifficultySelection'
// import LevelMap from './LevelMap';
import RegisterPage from './Register'
import LoginPage from './Login'
import { FIREBASE_AUTH, auth } from './firebase';
// import { FIREBASE_APP } from './firebase';
// import { initializeApp } from 'firebase/app';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavContainer from './NavBarContainer';
import LevelTemplate from './LevelTemplate';
// import LoginPage from './Login';

export default function App() {
  const [user, setUser] = React.useState(null);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    auth.onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
        setUser(user);
      });
    }, []);

  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={LoginPage}
          options={{title: 'Login'}}       
        />
        <Stack.Screen 
          name="Register"
          component={RegisterPage}
          options={{title: 'Register'}}       
        />
        
       

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false,
            headerStyle: {
              backgroundColor: 'lightsalmon'
            }
          }}
        />
        <Stack.Screen 
          name="StartAssesment"
          component={AssessmentScreen}
          options={{title: 'Assesment'}}       
        />
        <Stack.Screen 
          name="LevelMap"
          component={NavContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Recipes"
          component={LevelTemplate}
          options={{title: 'Recipes'}}       
        />
        <Stack.Screen 
          name="MiniQuiz"
          component={MiniQuiz}
          options={{title: 'Mini-Quiz Time!'}}       
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

