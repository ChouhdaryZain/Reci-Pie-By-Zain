// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/Navigation/AppNavigator';

// import Login from './src/Screens/Login';
// import Signup from './src/Screens/SignUp';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Login' component={Login} />
    //     <Stack.Screen name='Signup' component={Signup}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <View style={styles.container}>
      <AppNavigator />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
