
import {React, useRef, useState, useEffect} from "react";
import {View, Text, ImageBackground, ScrollView, TouchableOpacity} from "react-native";
import PointsDisplay from "./PointsDisplay";
import styles from "./styles";


// Foodingo/assets/images/levelMapBackground.png
const levelBackGround = require('./assets/images/levelMapBackground.png');

// const ScrollToLevelButton = ({title, onPress}) => {
//     return(
//         <TouchableOpacity style={styles.scrollToLevelButton} onPress={onPress} web-kit-overscrolling={Touch}>
//              <Text style ={styles.scrollToLevelButtonText}> {title} </Text>
//         </TouchableOpacity>
//     );
//   };


const LevelNode = ({level, onPress}) => (
    <TouchableOpacity onPress={onPress} >
        <View style={styles.levelNodes}>
            <Text style={styles.levelNodeText}>{level}</Text>
        </View>
    </TouchableOpacity>
);

const LevelNode2 = ({level, onPress}) => (
    <TouchableOpacity onPress={onPress} >
        <View style={styles.levelNodes2}>
            <Text style={styles.levelNodeText}>{level}</Text>
        </View>
    </TouchableOpacity>
);

const LevelMap = ({route, navigation}) => {
    const numLevels = 20;
    

    const [level, setLevel] = useState(0);
    const [points, setPoints] = useState(0); 
    
    useEffect(() => {
        setLevel(route.params.level) 
        setPoints((route.params.level - 1) * 200); 
    }, [route.params.level])

    function ScrollHandler(){
        ref.current.scrollTo({y:((level - 1) * 230 + 55)})
    }
    
    const HandleLevelClick = (index) => {
       if(index <= level){
            if(index === level){
                navigation.navigate("Recipes", {level: level, param: true})
            }
            else{
                navigation.navigate("Recipes", {level: index, param: false})
            }
       }
       else{
        alert('You have not unlocked this level')
       }
    }; 

    const levelNodeArr = [];

    for (let i =1; i < numLevels + 1; i++) {
        if(level >= i){
            levelNodeArr.push(
                <LevelNode
                key={i}
                level={i}
                onPress={() => HandleLevelClick(i)}
                />
            );
        }
        else{
            levelNodeArr.push(
                <LevelNode2
                key={i}
                level={i}
                onPress={() => HandleLevelClick(i)}
                />
            );
        }
    }

    return (
        // <ScrollView style={{flex:1}} ref={ref}>
        //     <ImageBackground source={levelBackGround} style={styles.background}>
        //             <View style={{width: "90%", backgroundColor: 'white', marginBottom: 10, marginTop: 10}}>
        //                 <ScrollToLevelButton title="Go To Latest Level" onPress={() => ScrollHandler()}/> 
        //             </View>
        //             <View style={styles.LevelMapContainer} >
        //                 {levelNodeArr}
        //             </View>
        //     </ImageBackground>
        // </ScrollView>
        <View style={{ flex: 1 }}>
        <ImageBackground source={levelBackGround} style={styles.background}>
            <ScrollView  style={{ flex: 1 }}>
                {/* <View style={{ backgroundColor: 'white', marginBottom: 10, marginTop: 10, paddingHorizontal: 16 }}>
                    <ScrollToLevelButton title="Go To Latest Level" onPress={() => ScrollHandler()} />
                </View> */}
                <View style={styles.LevelMapContainer} >
                    {levelNodeArr}
                </View>
                
            </ScrollView>
            <View style={styles.pointsContainer}>
                <PointsDisplay key={points} points={points} />
            </View>
            
        </ImageBackground>
    </View>



    );
};

export default LevelMap;

