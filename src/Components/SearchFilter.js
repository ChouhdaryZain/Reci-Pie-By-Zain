import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchFilter = ({ icon, placeholder }) => {
    return (
        <View style={{ backgroundColor: "#fff", flexDirection: "row", paddingVertical: 16, borderRadius: 8, paddingHorizontal: 16, marginVertical: 16, shadowColor: "#000", alignItems: "center" }}>
            <FontAwesome name={icon} size={20} color={"#f96163"} />
            <TextInput style={{ fontSize: 16, paddingLeft: 8, color: 'grey' }}>{placeholder}</TextInput>
        </View>
    )
}

export default SearchFilter

const styles = StyleSheet.create({})