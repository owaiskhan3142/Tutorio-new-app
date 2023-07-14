import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const CourseDesc = ({ route }) => {
    const { courseObj } = route.params
    console.log(courseObj);
    return (
        <View>
            <Text>{courseObj.courseName}</Text>
            <Image style={'courseImage'} source={{ uri: courseObj.courseImage }} />
            <Text>{courseObj.courseDescription}</Text>
            <TouchableOpacity>
                <Text>Buy Now for {courseObj.coursePrice}</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    courseImage: {
        width: '100%',
        height: 100,
    },
})

export default CourseDesc;
