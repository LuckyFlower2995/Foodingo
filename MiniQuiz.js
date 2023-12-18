import { useState, useEffect } from 'react';
import * as React from 'react';
import {SafeAreaView, Pressable, Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { quizQuestions } from './MiniQuizData'; 
import styles from "./styles";
import { ScrollView } from 'react-native-gesture-handler';

const BackgroundImage = require('./assets/images/StartingBG.jpg');

const MiniQuiz= ({route}) => {
    const navigation = useNavigation();
    const questions = quizQuestions;

    const [currentLevel, setCurrentLevel] = useState(1);

    useEffect(() => {
        setCurrentLevel(route.params.level); 
    }, []);

    const [currentLevelData, setCurrentLevelData] = useState(questions.find((data) => data.level === route.params.level));

    const [correct, setCorrect] = React.useState(0); 
    const [index, setIndex] = React.useState(0); 
    const [checked, setChecked] = React.useState(null);
    const [answers, setAnswers] = React.useState([]); 
    const [selectedAnswer, setSelectedAnswer] = React.useState(0); 

    useEffect(() => {
        if(selectedAnswer != null) {
            if(selectedAnswer === currentLevelData.questions[index].correctAnswer) {
                setCorrect((correct) => correct + 1);
                setChecked(true);
                answers.push({question:index + 1, answer: true})
            } else {
                setChecked(false);
                answers.push({question:index + 1, answer: false}) 
            }
        }
    },[selectedAnswer]);

    useEffect(() => {
        setSelectedAnswer(null);
        setChecked(null);
    },[index]);

    const pressHandler = () => {
        if(route.params.param){
            navigation.navigate('LevelMap', {screen: 'Level', params:{level: (route.params.level + 1)},})
        }
        else{
            navigation.navigate('LevelMap')
        }
    };

    return (
        <ImageBackground source={BackgroundImage} style={styles.miniContainer}>
        <SafeAreaView>
            <View style={styles.miniContainer}>
                <Text style={styles.miniAppTitle}>( {index + 1} / 3 )</Text>
                <Text style={styles.miniAppTitle}>Select the box with the correct answer:</Text>
            </View>
            <ScrollView>
            <View>
                {currentLevelData.questions.length + 1 > 0 && (
                    <View>
                        <Text style={styles.miniSectionHeader}>{currentLevelData.questions[index].question}</Text>
                            {currentLevelData.questions[index].answers.map((answer, answerIndex) => (
                                <Pressable 
                                    onPress={() => selectedAnswer === null && setSelectedAnswer(answerIndex)}
                                    key={answerIndex}
                                    style={selectedAnswer === answerIndex && answerIndex === currentLevelData.questions[index].correctAnswer 
                                        ? (styles.correctChoiceContainer)
                                        : selectedAnswer !== null && 
                                        selectedAnswer === answerIndex 
                                        ? (styles.wrongChoiceContainer)
                                        : (styles.choiceContainer)}>
                                    <Text style={styles.miniItem}>{answer}</Text>
                                </Pressable>                                    
                            ))}

                            {checked === null ? null : (
                                <Text style={styles.answerContainer}>{!!checked ? "Correct Answer!" : "Wrong Answer!"}</Text>
                            )}

                            {index + 1 >= currentLevelData.questions.length ? (
                                <Pressable style={styles.miniButton} onPress={() => pressHandler()}>
                                    <Text style={styles.miniButtonText}> Finish </Text>
                                </Pressable>
                            ) : checked === null ? null : (
                                <Pressable style={styles.miniButton} onPress={() => setIndex(index + 1)}>
                                    <Text style={styles.miniButtonText}> Next Question </Text>
                                </Pressable>
                            )}
                    </View> 
                )}
            </View>
            </ScrollView>

        <View>
            
        </View>

        </SafeAreaView>
        </ImageBackground>
    );

};

export default MiniQuiz;
