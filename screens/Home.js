import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
// import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'



const Home = ({ navigation }) => {

  // const progress = useSharedValue(0)
  const handleSubmit = (course) => () => {
    navigation.navigate('CourseDesc', { courseObj: course })
  }
  courses = [
    {
      id: '1',
      courseName: 'C++',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 1',
      coursePrice: '1000',
    },
    {
      id: '2',
      courseName: 'English',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 2',
      coursePrice: '2000',
    },
    {
      id: '3',
      courseName: 'Urdu',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 3',
      coursePrice: '3000',
    },
    {
      id: '4',
      courseName: 'Python',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 4',
      coursePrice: '4000',

    },
    {
      id: '5',
      courseName: 'Java',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 5',
      coursePrice: '5000',

    },
    {
      id: '6',
      courseName: 'JavaScript',
      courseImage: 'https://picsum.photos/200/300',
      courseDescription: 'This is course 6',
      coursePrice: '6000',
    }
  ];
  const Item = ({ course }) => {
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
      <StatusBar animated={false}
        backgroundColor="black"
        barStyle={'light-content'}
        hidden={false} />
      <View>
        <Text>Home</Text>
      </View>
      <View style={styles.main}>
        <FlatList data={courses}
          renderItem={({ item }) => <Item course={item} />}
          keyExtractor={item => item.id} />
      </View>
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
  },
  main: {
    top: 300,
    backgroundColor: 'green',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    // border: '10px solid black',
  }
})

export default Home