
import React from 'react';
// import Field from '../assets/Field';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Text, FilePicker, StatusBar, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';

const Signup = ({ navigation }) => {
    const image = { uri: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground source={image} style={styles.image} blurRadius={2}>
                <View style={styles.loginContainer}>
                    <TextInput style={styles.inputs} underlineColorAndroid="transparent" placeholderTextColor={'white'} placeholder='First Name'></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Last Name' keyboardType={"email-address"}></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Last Name'></TextInput>
                    <TextInput style={styles.inputs} keyboardType="numeric" placeholderTextColor={'white'} placeholder='Phone Number'></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Age'></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Gender'></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Country'></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Email'></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Password'></TextInput>
                    <TextInput style={styles.inputs} placeholderTextColor={'white'} placeholder='Confirm Password'></TextInput>
                    <Button style={styles.button} title="Register" onPress={() => {
                        navigation.navigate('Login')
                    }}></Button>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: 'white' }}>Already a member?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}><Text style={{ color: 'white' }}>Login here</Text></TouchableOpacity>
                </View>
            </ImageBackground >
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        top: 0,
        // borderColor: 'black',
    },
    inputs: {
        borderWidth: 1,
        padding: 6,
        margin: 5,
        width: 200,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottomColor: 'white',
        color: 'white',
        borderColor: 'white',
    },
    title: {
        fontFamily: 'Chela One',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        top: 200,

    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // top: 20,
        // marginTop: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        // position: 'absolute',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    input: {
        borderWidth: 1,
        padding: 2,
        margin: 5,
        width: 200,
        borderRadius: 10,
        backgroundColor: 'black',
        borderBottomColor: 'white',
        color: 'white',
        borderColor: 'white',
    },
    header: {
        width: '100%',
        padding: 20,
        alignSelf: 'stretch',
        textAlign: 'center',
        top: 0,
        position: 'absolute',
        color: 'white',
        fontFamily: 'Chela One',
    },
    loginCover: {
        width: '100%',
        height: 200,
    },
    loginContainer: {
        // paddingTop: 50,
        alignItems: 'center',
        top: 200,
        padding: 30,
        width: '70%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        left: '15%',
        borderRadius: 10,
        position: 'relative',
    },
    footer: {
        alignItems: 'center',
        top: 200,

    }
})

export default Signup;
