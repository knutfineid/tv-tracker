import { View, Text } from 'react-native'
import React from 'react'
import NavbarButton from './NavbarButton'

export default function Navbar() {
  return (
    <View className="absolute bottom-0 left-0 bg-slate-600 h-20 w-screen"> 
      <View className="flex flex-row flex-nowrap">
        <NavbarButton icon="film" link="/"/>
        <NavbarButton icon="globe-europe" link="/discover"/>
      </View>
    </View>
  )
}