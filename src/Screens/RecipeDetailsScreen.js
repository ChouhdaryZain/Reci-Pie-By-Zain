import { Image, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '../Constants';
import { Directions } from 'react-native-gesture-handler';

const RecipeDetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;
    // console.log(item)
    return (
        <View style={{
            backgroundColor: item.color,
            flex: 1,
        }}>
            <View style={{
                marginTop: 44,
                marginHorizontal: 16,
                flexDirection: 'row',
            }}>
                <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                    <FontAwesome name='arrow-circle-left' size={28} color={'#fff'} />
                </Pressable>
                <Pressable>
                    <FontAwesome name='heart-o' size={28} color={'#fff'} />
                </Pressable>
            </View>
            <View style={{
                backgroundColor: "#fff",
                flex: 1,
                marginTop: 150,
                borderTopRightRadius: 56,
                borderTopLeftRadius: 56,
                alignItems: 'center',
                paddingHorizontal: 16,
            }}>
                <View style={{
                    //   backgroundColor: 'red',
                    width: 300,
                    height: 300,
                    position: 'absolute',
                    marginTop: -150,
                    borderRadius: 56,
                }}>
                    {/* Recipe Details Image */}
                    <Image source={item.image} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }} />
                </View>
                {/* Recipe Details Text Heading */}
                <Text style={{
                    marginTop: 160,
                    fontWeight: "bold",
                    fontSize: 28,
                    alignSelf: 'center',
                    marginBottom: 16,
                }}>
                    {item.name}
                </Text>
                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Recipe Details Description */}
                        <Text style={{
                            marginVertical: 16,
                            fontSize: 16,
                            alignSelf: 'center',
                        }}>
                            {item.description}
                        </Text>
                        {/* Time, difficulty level and calories */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}>
                            {/* Time Required for racipe to cook */}
                            <View style={{
                                backgroundColor: 'rgba(255,0,0,0.38)',
                                marginTop: 8,
                                // paddingHorizontal: 16,
                                // paddingVertical: 16,
                                padding: 16,
                                borderRadius: 8,
                                alignItems: 'center',
                                width: '30%',
                            }}>
                                <Text style={{ fontSize: 40 }}>⏱️</Text>
                                <Text style={{ fontSize: 20, fontWeight: 500 }}>{item.time}</Text>
                            </View>
                            {/* Difficulty Level of recipe */}
                            <View style={{
                                backgroundColor: 'rgba(135, 206, 235, 0.8)',
                                marginTop: 8,
                                // paddingHorizontal: 26,
                                // paddingVertical: 26,
                                padding: 16,
                                borderRadius: 8,
                                alignItems: 'center',
                                width: '31%',
                            }}>
                                <Text style={{ fontSize: 40 }}>🥣</Text>
                                <Text style={{ fontSize: 20, fontWeight: 500 }}>{item.difficulty}</Text>
                            </View>
                            {/* Calories in a recipe */}
                            <View style={{
                                backgroundColor: 'rgba(255, 165, 0, 0.48)',
                                marginTop: 8,
                                // paddingHorizontal: 26,
                                // paddingVertical: 26,
                                padding: 16,
                                borderRadius: 8,
                                alignItems: 'center',
                                width: '30%',
                            }}>
                                <Text style={{ fontSize: 40 }}>🔥</Text>
                                <Text style={{ fontSize: 20, fontWeight: 500 }}>{item.calories}</Text>
                            </View>
                        </View>
                        {/* Recipe Ingredients */}
                        <View style={{
                            alignSelf: 'flex-start',
                            marginTop: 22,
                        }}>
                            <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 6, }}>Ingredients:</Text>
                            {item.ingredients.map((ingredients, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                                        <View style={{
                                            backgroundColor: 'red',
                                            height: 10,
                                            width: 10,
                                            borderRadius: 5,
                                        }}></View>
                                        <Text style={{ fontSize: 18, marginLeft: 6 }}> {ingredients}</Text>
                                    </View>
                                )
                            })}
                        </View>
                        {/* Recipe Steps */}
                        {/* <View style={{
                            alignSelf: 'flex-start',
                            marginTop: 22,
                        }}>
                            <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 6, }}>Steps:</Text>
                            {item.steps.map((steps, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                                        <View style={{
                                            backgroundColor: 'red',
                                            height: 10,
                                            width: 10,
                                            borderRadius: 5,
                                        }}></View>
                                        <Text style={{ fontSize: 18, marginLeft: 6 }}> {steps}</Text>
                                    </View>
                                )
                            })}
                        </View> */}
                        {/* Recipe Steps */}
                        <View style={{
                            alignSelf: 'flex-start',
                            marginTop: 22,
                        }}>
                            <Text style={{fontSize: 22, fontWeight: '600'}}>Steps:</Text>
                            {item.steps.map((steps, index)=> {
                                return (
                                        <Text style={{ fontSize: 18, marginVertical: 4 }}>{`${index+1} ) ${steps}`}</Text>
                                )
                            })}
                        </View>
                        {/* <View style={{
                            alignSelf: 'flex-start',
                            marginTop: 22,
                        }}>
                            <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 6, }}>Steps:</Text>
                            {item.steps.map((steps, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                                        <View style={{
                                            backgroundColor: 'red',
                                            height: 10,
                                            weight: 10,
                                            borderRadius: 5,
                                        }}></View>
                                        <Text style={{ fontSize: 18, marginLeft: 6 }}>{steps}</Text>
                                    </View>
                                )
                            })}
                        </View> */}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default RecipeDetailsScreen

const styles = StyleSheet.create({})