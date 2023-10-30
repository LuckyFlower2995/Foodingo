import React from "react";
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, Button} from "react-native";
import BackgroundGenerator from "./BackGroundGenerator";
import styles from "./styles";
import PointsDisplay from "./PointsDisplay";


const levelBackGround = require('./assets/bg1.jpg');

const LevelNode = ({level, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.levelNodes}>
            <Text style={styles.levelNodeText}>{level}</Text>
        </View>
    </TouchableOpacity>
);

const LevelMap = () => {
    const numLevels = 20; 

    const HandleLevelClick = (level) => {
        console.log(`Clicked on Level ${level}`);
    }; 

    const levelNodeArr = [];

    for (let i =1; i < numLevels + 1; i++) {
        levelNodeArr.push(
            <LevelNode
            key={i}
            level={i}
            onPress={() => HandleLevelClick(i)}
            />
        );
    }

    return (
        <ScrollView style={{flex:1}}>
            <ImageBackground source={levelBackGround} style={styles.background}>
                    <View style={styles.LevelMapContainer}>
                        {levelNodeArr}
                    </View>
            </ImageBackground>
        </ScrollView>
    );

};

export default LevelMap; 
