import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.signUP}>
      <Text>This is a SignUp screen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text>Return back to login screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  signUP: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
