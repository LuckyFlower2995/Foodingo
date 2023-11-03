import { useState } from 'react';
import {SectionList, Pressable, Button, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sectionListData } from './SectionListData'; 

const FinishAssessmentButton = ({title, onPress}) => {
  return(
      <TouchableOpacity style={styles.button} onPress={onPress}>
           <Text style ={styles.buttonText}> {title} </Text>
      </TouchableOpacity>
  );
};

let answerArr = [];
let correctAnswer = 0;
let isChecked = [];


const MyCheckbox = ({index, sectionIndex}) =>{
  const [checked, setChecked] = useState(false);

  function pressHandle(){
    switch(sectionIndex){
      case 0:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 1:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 2:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 0){
          answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 0){
          answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
          }
        break;
      case 3:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
         }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 4:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 5:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 6:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 7:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 8:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 9:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 10:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break; 
      case 11:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
        case 12:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 13:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 14:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
    }
  }
  
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => pressHandle()}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
   
  );
}

const SectionListBasics = ({ navigation }) => {
  const Finish = () => {
    for(let i = 0; i < answerArr.length; i++){
      if(answerArr[i] === true){
        correctAnswer++
      }
    }
    if(correctAnswer < 4){
      Alert.alert("Congratulation", "You are a Newbie. You may start at the Newbie Level");
    }
    else if(correctAnswer < 7){
      Alert.alert("Congratulation", "You are a Novice. You may start at the Novice Level");
    }
    else if(correctAnswer < 10){
      Alert.alert("Congratulation", "You are a Intermediate Cook. You may start at the Mid-Tier Level");
    }
    else if(correctAnswer < 13){
      Alert.alert("Congratulation", "You are a Advance Cook. You may start at the Advance Level");
    }
    else{
      Alert.alert("Congratulation", "You are a Expert Cook. You may start at the Expert Level");
    }
    navigation.navigate('LevelMap')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Select the box with the correct answer:</Text>
      <SectionList 
        stickySectionHeadersEnabled = {false}
        sections={sectionListData}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({item, index, section}) => <View style={styles.checkboxContainer}>
          <MyCheckbox index={index} sectionIndex={section.index}/>
          <Text style={styles.item}>{item}</Text>
          </View>}

        keyExtractor={item => `basicListEntry-${item}`}
      />

      <FinishAssessmentButton 
        title = "Finish"
        onPress={() => Finish()}
      />  
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 22,
    paddingBottom: 22
  },
  appTitle: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    paddingBottom: 22,
    fontSize: 22,
  },
  sectionHeader: {
    backgroundColor: '',
    paddingStart: 12,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'left',
    fontFamily: 'Avenir',
    fontSize: 20,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  item: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
    padding: 16,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    alignContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ff0000',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#ff0000',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    height: 40,
    marginBottom: 10,
    borderRadius: 40,
    backgroundColor: 'rgba(255 255 255/ 0.5)',
},
  buttonText: {
      textTransform: 'uppercase',
      color: '#f04713',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      letterSpacing: 3,
      fontSize: 20,
      textDecorationLine: 'none', 
      marginLeft: 10,
  },

});

export default SectionListBasics;