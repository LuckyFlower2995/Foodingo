import { useState } from 'react';
import {SectionList, Pressable, Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
let correctAnser;


const MyCheckbox = ({index, sectionIndex}) =>{
  const [checked, setChecked] = useState(false);
  function pressHandle(){
      setChecked(!checked)
      if(sectionIndex === 0 && index === 2){
        answerArr[sectionIndex] = !checked;
      }
      if(sectionIndex === 1 && index === 3){
        answerArr[sectionIndex] = !checked;
      }
      if(sectionIndex === 2 && index === 0){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 3 && index === 2){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 4 && index === 1){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 5 && index === 2){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 6 && index === 3){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 7 && index === 0){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 8 && index === 1){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 9 && index === 3){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 10 && index === 2){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 11 && index === 3){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 12 && index === 1){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 13 && index === 2){
        answerArr[sectionIndex] = !checked
      }
      if(sectionIndex === 14 && index === 1){
        answerArr[sectionIndex] = !checked
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


const SectionListBasics = ({ navigation }) => {
  const Finish = () => {
    for(let i = 0; i < answerArr.length; i++){
      if(answerArr[i] === true){
        correctAnser++
      }
    }
    alert(correctAnser)
    //navigation.navigate('LevelMap')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Select the box with the correct answer:</Text>
      <SectionList
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


export default SectionListBasics;