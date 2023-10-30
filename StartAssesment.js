import React, {useState} from "react";
import { Button, View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import BackgroundGenerator from "./BackGroundGenerator";
const options = [
    'Follow Basic Recipes',
    'Follow Any Recipe',
    'Add/Subtract From Any Recipe with Some Success',
    'Prepare Most Packaged Foods',
    'Cook Without A Recipe',
];


const CustomButton = ({ title, onPress, isChecked }) => {
    return (
        <TouchableOpacity style={styles.assesmentButton} onPress={onPress}>
            {isChecked && (
            <Ionicons
                name='checkbox'
                size={24}
                color='white'
                style = {styles.checkbox}
            />
            )}
            <Text style ={styles.buttonText}> {title} </Text>
        </TouchableOpacity>
    );
};
const StartAssesment = () => {
    const [selectedButton, setSelectedButton] = useState([]);

    const handleButtonPress = (index) => {
       const newSelectedButtons = [...selectedButton]; //copy of selected buttons array

       const indexInSelected = newSelectedButtons.indexOf(index); //check if button is already selected

       if (indexInSelected !== -1) {
        newSelectedButtons.splice(indexInSelected, 1);
       }
       else {
        newSelectedButtons.push(index);
       }

       setSelectedButton(newSelectedButtons);
    };

    return (
        <View style={{flex: 1}}>
            <View style={styles.overlay}>
                {options.map((option, index) => ( 
                    <CustomButton 
                        key={index}
                        title={option}
                        onPress={() => handleButtonPress(index)}
                        isChecked={selectedButton.includes(index)}
                    />
                ))}
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.headerText}>You Can... (Choose All That Apply)</Text>
            </View>
        </View>
    );

};


export default StartAssesment; 
