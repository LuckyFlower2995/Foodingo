import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from './Shared/Colors';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, auth } from './firebase';
import { ActivityIndicator } from 'react-native-paper';
// import { KeyboardAvoidingView } from 'react-native-web';

const loginlogoImage = require('./assets/images/DingoLogo.jpg');


const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const onPressLogin = async () => {
        // setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert('Login failed ' + error.message);
        } finally {
            // setLoading(false);
            navigation.navigate('Home');

        }
        
        // auth
        // .createUserWithEmailAndPassword(email, password)
        // .then(userCredentials => {
        //     const user = userCredentials.user;
        //     console.log('Logged in with:', user.email);
        //     navigation.navigate('Home')
        // })
        // .catch(error => alert(error.message))
    }

    const onPressForgotPassword = () => {
        //handle forgot password pressed
        console.log("Forgot Password Pressed");
        navigation.navigate('ResetPassword') 
    }

    const onPressSignUp =  () => {

        navigation.navigate('Register'); 
    

        //handle sign up 
        // console.log("Register Pressed");
        // navigation.navigate('Register') 
    };

    return (
    <ImageBackground
    source = {require('./assets/images/loginBackground.png')}
    style={styles.backgroundImage}>

    <Image source={loginlogoImage} style={styles.logInLogo}/>
    
    <View style={styles.logIncontainer}> 
       
        <Text style={styles.loginHeader}> Welcome </Text>
    
        {/* {loading ? (
        <ActivityIndicator size="large" color='#0000ff'/>
        ) : (
            
        <> */}
        <TouchableOpacity
            onPress = {onPressSignUp}>
            <Text style={styles.forgotSignUpText}>
                New User? Sign up!
            </Text>
        </TouchableOpacity>

        <View style={styles.inputView}>
            <TextInput style={styles.inputText}
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={"#003f5c"}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput style={styles.inputText}
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={"#003f5c"}
            />
            { loading ? <ActivityIndicator size="large" color='#0000ff'/> 
            : null }
                    
            </View>

        <TouchableOpacity
            onPress={onPressLogin}
            style={styles.loginButton}>
            <Text style={styles.loginText}> Login </Text>
        </TouchableOpacity>
        {/* </>
        )} */}

        <TouchableOpacity
            onPress = {onPressForgotPassword}>
            <Text style={styles.forgotPasswordText}>
                Forgot Password?
            </Text>
        </TouchableOpacity>
        <View style={styles.googleButton}>
        <Ionicons name="logo-google" size={24} color="white" />
        <Text style={{color:Colors.secondary, marginTop: 3, marginLeft: 2}}> Sign In with Google </Text>
            
    </View>
        
    </View>
    </ImageBackground>
    )

}

const styles = StyleSheet.create({

    logIncontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logInLogo: {
        width: 100,
        height: 100, 
        marginLeft: 210,
        marginBottom: 25,
        borderRadius: 150,
        marginTop: 20,
    },
    loginHeader: {
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
    forgotSignUpText: {
        color: "white",
        fontSize: 15,
        marginBottom: 60,
    },
    forgotPasswordText: {
        color: "white",
        fontSize: 15,
        marginTop: 10,
    },
    loginButton: {
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
    googleButton: {
        backgroundColor:Colors.primary,
        padding: 10,
        margin: 30,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

});

export default LoginPage; 
