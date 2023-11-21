import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { categories, colors } from '../Constants';

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View
            key={index} // Using category.id as the key
            style={{
              backgroundColor: index === 0 ? colors.primary : colors.light,
              paddingVertical: 12,
              paddingHorizontal: 14,
              marginRight: 16,
              borderRadius: 8,
              marginVertical: 8
            }}
          >
            <Text style={{ color: index === 0 ? colors.light : 'black', fontSize: 16 }}>
              {category.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
