import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, SafeAreaView, Button, TouchableHighlight } from 'react-native';

// const fetch = require('node-fetch');

const Login = () => {
    const [jsonData, setJsonData] = React.useState(null);
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
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
        console.log("Submitted");
        console.log(username);
        console.log(password);
 }
 const handelChange = (e) => {
    
 }

    return (
        <SafeAreaView style={styles.container}>
            
                <Text style={styles.header}>Temperature Today is {jsonData}° Celcius</Text>
                <Text style={{color: 'white'}}>Login</Text>
                <TextInput style={styles.input} placeholder='Enter your Username' ></TextInput>
                <Text style={{color: 'white'}} onChangeText={(e) => {setUsername(e.target.value)}}>Password</Text>
                <TextInput style={styles.input} placeholder='Enter Password' onChangeText={(e) => setPassword(e.target.value) }></TextInput>
                <Button style={{borderRadius: '10', marginTop:'100px'}} title="Press Me" onPress={handleSubmit}></Button>
                

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02539c',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        marginTop: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        // color: 'white',
    },
    header: {
        // backgroundColor: 'pink',
        width: '100%',
        padding: 20,
        alignSelf: 'stretch',
        textAlign: 'center',
        top: 0,
        position: 'absolute',
        color: 'white',
    },
})

export default Login;
