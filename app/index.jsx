import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FrontPageCard from '../components/FrontPageCard'
import firestore from '@react-native-firebase/firestore'



export default function Tracking() {
  return (
    <View className="mx-3">
        <Text className="text-4xl mb-4">Welcome</Text>
        <FlatList>
            <FrontPageCard/>
            <FrontPageCard/>
        </FlatList>
    </View>
  )
}