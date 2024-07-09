import { View, Text, SafeAreaView } from 'react-native'
import Navbar from '../components/Navbar'
import React from 'react'
import {Slot} from 'expo-router'

const MainLayout = () => {
  return (
    <View className="bg-gray-400">
      <SafeAreaView className="h-screen">
        <Slot />
        <Navbar/>
      </SafeAreaView>
    </View>
  )
}

export default MainLayout