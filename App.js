import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


export default function App() {
  const [isWorking, setIsworking] = useState(false)
  const [time, seTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")

  return (
    <View style={[styles.container,{backgroundColor:colors[currentTime]}]}>      
      <Text style={styles.text}>Pomodoro</Text>
      <Text>{time}</Text>
      <StatusBar style="light" />
      {/* StatusBar es la barra que muestra la hora, batería, señal, etc */}
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={seTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor:"#F7DC6F"
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom:20
  }
});
