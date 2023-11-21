import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import {}

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.logIN}>
      <Text>This is a Login screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Move to SignUp Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  logIN: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})