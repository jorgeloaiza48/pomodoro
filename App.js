import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from 'expo-av';

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


export default function App() {
  const [isWorking, setIsworking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")
  const [isActive, setIsActive] = useState(false)


  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000);
    }
    else {
      clearInterval(interval);
    }
    if(time === 0){
      setIsActive(false)
      setIsworking(!isWorking)
      setTime(isWorking ? 300: 1500)
    }
    return () => clearInterval(interval)
  }, [isActive,time])

  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive)
  }
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require("./assets/click.mp3")
    )
    await sound.playAsync()
  }

  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Text style={styles.text}>Pomodoro</Text>
      {/* <Text>{time}</Text> */}
      <StatusBar style="light" />
      {/* StatusBar es la barra que muestra la hora, batería, señal, etc */}
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
      <Timer time={time} />
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={{ color: "white", fontWeight: "bold" }}>{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: "#F7DC6F",
    borderWidth: 3
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center"
  }
});
