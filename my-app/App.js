import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incr = () => setCount(count + 2);
  const decr = () => setCount(count - 2);
  const reset = () => setCount(0);
  const bgcolor = () => (count < 5 ? "red" : "purple");

  return (
    <View style={styles.container}>
      <Text style={{ color: bgcolor() }}>Counter: {count}</Text>
      <Button title="Increment" onPress={incr} />
      <Button title="Decrement" onPress={decr} />
      <Button title="Reset" onPress={reset} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
