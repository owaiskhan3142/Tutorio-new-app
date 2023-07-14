import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseDesc from './screens/CourseDesc';


export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fa8072',
          },
          headerTintColor: "black"
        }}>
        <stack.Screen name="Login" component={Login} options={{ title: '  ' }} />
        <stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <stack.Screen name="CourseDesc" component={CourseDesc} options={{ title: 'Course' }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
