import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { colors, recipeList } from '../Constants'
import { Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const RecipeCard = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("RecipeDetails", { item: item })}
            style={{
              backgroundColor: colors.light,
              borderRadius: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
              marginVertical: 16,
            }}
          >
            <Image
              style={{ width: 150, height: 150, resizeMode: "center" }}
              source={item.image}
            />
            <Text style={{ fontWeight: '600', fontSize: 16 }}>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <Text>{item.rating}</Text>
              <FontAwesome
                name="star"
                color={colors.primary}
                size={16}
                marginLeft={4}
              />
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
}

export default RecipeCard

const styles = StyleSheet.create({})