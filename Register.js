import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { auth } from './firebase';
// import axios from 'axios';

const loginlogoImage = require('./assets/images/DingoLogo.jpg');
const registerBackground = require('./assets/images/signupBackground.png');

const RegisterPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;
    

    const onHandleSignUp = async () => {
        // setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert('Registration failed: ' + error.message);
        } finally {
            // setLoading(false);
            navigation.navigate('Home'); 
        }
    }
    
    return (
        <ImageBackground
        source = {registerBackground}
        style={styles.backgroundImage}
        >

        <Image source={loginlogoImage} style={styles.logInLogo}/>

        <View style={styles.registerContainer}> 
        <Text style={styles.registerHeader}> Create </Text>
        <Text style={styles.registerHeader}> New Account </Text>

        {/* {loading ? (
        <ActivityIndicator size="large" color='#0000ff'/>
        ) : (

        <> */}
            
        <View style={styles.inputView}>
            <TextInput style={styles.inputText}
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor={"#003f5c"}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput style={styles.inputText}
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={"#003f5c"}
            />
        </View>

        <TouchableOpacity
        onPress={onHandleSignUp}
        style={styles.registerButton}>
            <Text style={styles.registerText}>
                Create Account
            </Text>

        </TouchableOpacity>
        {/* </>
        )} */}
    </View>
    </ImageBackground>
    
    )
}

const styles = StyleSheet.create({

    registerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logInLogo: {
        width: 100,
        height: 100, 
        marginLeft: 160,
        borderRadius: 150,
        marginTop: 20,
    },
    registerHeader: {
            // fontWeight: "bold",
        fontSize: 55,
        fontFamily: 'Avenir', 
        color: 'white',
        marginBottom: 15,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#FFAF88",
        borderRadius: 25, 
        height: 50,
        marginBottom: 30,
        justifyContent: 'center',
        padding: 20,
        borderWidth: 2,
        borderColor: 'white',
    },
    inputText: {
        height: 50,
        color: "white",
    },
  
    registerButton: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    loginText: {
        height: 20,
        color: 'white',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    
    });
    
    export default RegisterPage;
