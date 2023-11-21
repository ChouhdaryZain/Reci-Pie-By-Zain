import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Header from "../Components/Header";
import SearchFilter from "../Components/SearchFilter";
import CategoriesFilter from "../Components/CategoriesFilter";
import RecipeCard from "../Components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: 16, marginTop: 44 }}>
      {/* render header */}
      <Header headerText={"Hi John"} headerIcon={"bell-o"} />
      {/* render search */}
      <SearchFilter icon={"search"} placeholder={"Enter your fav recipie"} />
      {/* render list of recipes */}
      <View style={{ marginTop: 10, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <CategoriesFilter />
        {/* render Recipes */}
        <View style={{ marginTop: 22, flex: 1, }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
          <RecipeCard />
        </View>
      </View>
    </View>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
