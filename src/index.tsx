import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
 import {Home,Game} from "@screens/index";
export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
