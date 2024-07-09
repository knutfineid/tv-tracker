import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Link } from 'expo-router'

export default function NavbarButton({icon, text, link}) {
  return (
    <View className="flex-1">
        <Link href={link} asChild>
            <Pressable className="flex justify-center items-center h-full pb-7">
                <FontAwesome5 name={icon} size={25} color="white"/>
            </Pressable>
        </Link>
    </View>
  )
}