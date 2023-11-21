import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants'




const WelcomeScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.welcomeScreenStyle}>
      <Image source={require('../../assets/images/welcome1.png')} />
      <Text style={styles.textStyle}>40k+ Premium Recipies</Text>
      <Text style={styles.headingChef}>Cook like A Chef</Text>

      <TouchableOpacity onPress={() => navigation.navigate("RecipeList")} style={styles.homeScreenButton}>
        <Text style={styles.homeScreenButtonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  welcomeScreenStyle: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  headingChef: {
    color: '#000',
    fontSize: 44,
    fontWeight: "bold",
    marginTop: 44,
    marginBottom: 20,
  },
  homeScreenButton: {
    backgroundColor: '#f96163',
    borderRadius: 18,
    paddingVertical: 18,
    // width: window * 0.8,
    width: "80%",
    alignItems: 'center',
  },
  homeScreenButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
})
