import React from 'react';
import styles from './styles'
import BackgroundGenerator from './BackGroundGenerator';
import { View, Text, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const logoImage = require('./DingoLogo.jpg');

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <BackgroundGenerator />
      <View style={styles.overlay}>
      <Text style={styles.headerText}>Your Culinary Journey Starts Here</Text>
      <Image source={logoImage} style={styles.logo}/>
      <Button  
        title = "Start Assessment"
        onPress={() => {
          console.log('Button Pressed');
          navigation.navigate('StartAssesment');
        }}
      />
      <Button 
      title = "Level Template"
      onPress={() => {
        navigation.navigate('LevelTemplate')
      }}
      />
      <Button 
      title = "Level Map"
      onPress={() => {
        navigation.navigate('LevelMap')
      }}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

