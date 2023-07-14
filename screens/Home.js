import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


const Home = ({ navigation }) => {
  const handleSubmit = (course) => () => {
    navigation.navigate('CourseDesc', { courseObj: course })
  }
  courses = [
    {
      id: '1',
      courseName: 'Course 1',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 1',
      coursePrice: '1000',

    },
    {
      id: '2',
      courseName: 'Course 2',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 2',
      coursePrice: '2000',
    },
    {
      id: '3',
      courseName: 'Course 3',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 3',
      coursePrice: '3000',
    },
    {
      id: '4',
      courseName: 'Course 4',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 4',
      coursePrice: '4000',

    }
  ];
  const Item = ({ course }) => {
    console.log('Course =>', course);
    return (
      <TouchableOpacity style={styles.courseTile} onPress={handleSubmit(course)} >
        <Image style={styles.courseImage} source={{ uri: course.courseImage }} />
        <Text style={styles.courseTitle}>{course.courseName}</Text>
        <Text>{course.courseDescription}</Text>
      </TouchableOpacity>
    )
  };
  return (
    <SafeAreaView style="mainContainer">
      <StatusBar style="auto" />
      <FlatList data={courses}
        renderItem={({ item }) => <Item course={item} />}
        keyExtractor={item => item.id} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // padding: 10,
  },
  courseImage: {
    width: '100%',
    height: 100,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseTile: {
    padding: 40,
    border: '1px solid black',
  }
})

export default Home