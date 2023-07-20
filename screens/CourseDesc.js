import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const CourseDesc = ({ route }) => {
    const { courseObj } = route.params
    console.log(courseObj);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={false}
                backgroundColor="black"
                barStyle={'light-content'}
                hidden={false} />
            <View style={styles.header}>
                <Image style={styles.courseImage} source={{ uri: courseObj.courseImage }}></Image>
            </View>
            <View style={styles.footer}>
                <Text style={styles.heading}>{courseObj.courseName}</Text>
                <Text>{courseObj.courseDescription}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03CEA4',
    },
    main: {
        // top: 300,
        backgroundColor: 'green',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        bottom: 0,
        // height: ' 100%',
        // border: '10px solid black',
    },
    desc: {
        top: 100,
        backgroundColor: 'white',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        height: 200,

    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 2,
        backgroundColor: 'white',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    courseImage: {
        width: 300,
        height: 200,
        borderRadius: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#006241',
    },


})

export default CourseDesc;
