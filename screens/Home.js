import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


const Home = ({navigation}) => {
  const handleSubmit = () => {
    console.log("Submitted");
    navigation.navigate('CourseDesc', {
      courseObj: courses,
    })
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
  const Item = ({ title, description, image }) => (
    <TouchableOpacity style={styles.courseTile} onPress={handleSubmit} >
      <Image style={styles.courseImage} source={{ uri: image }} />
      <Text style={styles.courseTitle}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style="mainContainer">
      <StatusBar style="auto" />
      <View>
        <Text>Slider here</Text>
      </View>
      <FlatList data={courses}
        renderItem={({ item }) => <Item title={item.courseName} description={item.courseDescription} image={item.courseImage} />}
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