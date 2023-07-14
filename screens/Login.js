import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    useFonts,
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular,
    ChelaOne_400Regular,
} from "@expo-google-fonts/dev";
import { View, StyleSheet, Text, TextInput, SafeAreaView, Button, ImageBackground, TouchableHighlight, Image } from 'react-native';

// const fetch = require('node-fetch');

const image = { uri: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' };
const Login = ({ navigation }) => {
    const [jsonData, setJsonData] = useState(null);
    const [username, setUsername] = useState('owais');
    const [password, setPassword] = useState('owais');
    url = "https://api.open-meteo.com/v1/forecast?latitude=24.83&longitude=67.08&current_weather=true";
    const getData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.current_weather.temperature)
            setJsonData(json.current_weather.temperature);
            console.log(jsonData)
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = () => {
        console.log(username, password)
        navigation.navigate('Home', { username: username })
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <StatusBar style="auto" />
                <Text style={styles.header}>Temperature Today is {jsonData}° Celcius</Text>
                <Text style={styles.header}>Tutorio</Text>
                <View style={styles.loginContainer}>
                    <Text style={{ color: 'white' }}>Login</Text>
                    <TextInput style={styles.input} placeholder='Enter your Username' onChangeText={(username) => {
                        setUsername(username);
                    }}></TextInput>
                    <Text style={{ color: 'white' }}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter Password' onChangeText={(password) => {
                        setPassword(password);
                    }}></TextInput>
                    <Button style={{ borderRadius: '10', marginTop: '100px' }} title="Press Me" onPress={handleSubmit}></Button>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
    },
    image: {
        width: '100%',
        flex: 1,
    },
    input: {
        borderWidth: 1,
        padding: 8,
        margin: 10,
        width: 200,
        borderRadius: 10,
        backgroundColor: 'white',
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
        // flex: 1,
    },
    loginContainer: {
        alignItems: 'center',
        top: '40%',
        padding: 10,
        padding: 50,
    }
})

export default Login;
