import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View>
          <Text>This page will display all your lists</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home