import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const FrontPageCard = () => {
  return (
    <Link href="/show" asChild >
      <Pressable className="flex flex-row
      bg-gray-500 rounded-2xl p-2 mb-4">
        <Image className="w-36 h-36 rounded-2xl mr-6" source={{uri: 'https://cdn.britannica.com/63/247263-050-3ABF5622/promotional-still-The-Office-Steve-Carell.jpg'}}/>
        <View className="flex flex-col justify-center">
        <Text className="text-lg">The Office</Text>
        <Text className="text-sm">Next episode:</Text>
        <Text className="text-sm">S1 E1</Text>
        </View>
      </Pressable>
    </Link>
  )
}

export default FrontPageCard