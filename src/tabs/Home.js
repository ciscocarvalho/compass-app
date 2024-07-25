import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bússola</Text>

      <View style={styles.primaryBtn}>
        <Button
          color="lightblue"
          title="Começar"
          onPress={() => navigation.navigate("Baterry")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 48,
    color: "black",
  },
  primaryBtn: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "black",
    width: "40%",
  },
});
