import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const options = ["Pomodoro", "Short Break", "Long Break"]


export default function Header({currentTime, setCurrentTime, setTime}) {

    // Esta función analiza en qué botón hicieron click. Si fue en el primero entonces index vale cero y le asigna a newTime el valor de 25. Si fue en el segundo entonces index vale 1 y asigna a newTime el valor de 5. Sino asigna el valor de 15.
    //Luego setea la variable currentTime al mismo valor de index.
    //Luego setea la variable time al valor de newTime * 60
    function handlePress(index){
        const newTime = index === 0 ? 25:index === 1 ? 5: 15;
        setCurrentTime(index);
        setTime(newTime * 60)
    }
    return (
        <View style={styles.view}>
            {options.map((item, index) => (
                // currentTime != index && {borderColor:"transparent" -->> establece border transparente a los otros dos botones en los que no hicieron click.
                <TouchableOpacity key={index} style={[styles.itemStyle,currentTime != index && {borderColor:"transparent"}]} onPress={()=>handlePress(index)}> 
                    <Text style={styles.text}>{item}</Text>                    
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
        borderWidth:2,
        padding:5,
        borderRadius:10,
        borderColor:"white",
        marginVertical:20
    },
    text:{
        textAlign:"center",
        fontWeight:"bold"
    }
})