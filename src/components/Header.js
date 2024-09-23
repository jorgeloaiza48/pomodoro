import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const options = ["Pomodoro", "Short Break", "Long Break"]


export default function Header({currentTime, setCurrentTime, time}) {
    return (
        <View style={styles.view}>
            {options.map((item, index) => (
                <TouchableOpacity key={index} style={styles.itemStyle}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flexDirection: "row",
    },
    itemStyle: {        
        width:"33%",
        borderWidth:3,
        padding:5,
    }
})