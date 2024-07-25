import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Magnetometer } from "expo-sensors";

const computeAngle = (magnetometer) => {
  const { x, y } = magnetometer;

  if (Math.atan2(y, x) >= 0) {
    return Math.atan2(y, x) * (180 / Math.PI);
  } else {
    return (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
  }
};

const computeDirection = (angle) => {
  if (angle >= 22.5 && angle < 67.5) {
    return "NE";
  } else if (angle >= 67.5 && angle < 112.5) {
    return "E";
  } else if (angle >= 112.5 && angle < 157.5) {
    return "SE";
  } else if (angle >= 157.5 && angle < 202.5) {
    return "S";
  } else if (angle >= 202.5 && angle < 247.5) {
    return "SW";
  } else if (angle >= 247.5 && angle < 292.5) {
    return "W";
  } else if (angle >= 292.5 && angle < 337.5) {
    return "NW";
  } else {
    return "N";
  }
};

const directionToName = {
  NE: "Nordeste",
  E: "Leste",
  SE: "Sudeste",
  S: "Sul",
  SW: "Sudoeste",
  W: "Oeste",
  NW: "Noroeste",
  N: "Norte",
};

const directionToImage = {
  NE: require("../../assets/compass/northeast.png"),
  E: require("../../assets/compass/east.png"),
  SE: require("../../assets/compass/southeast.png"),
  S: require("../../assets/compass/south.png"),
  SW: require("../../assets/compass/southwest.png"),
  W: require("../../assets/compass/west.png"),
  NW: require("../../assets/compass/northwest.png"),
  N: require("../../assets/compass/north.png"),
};

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    Magnetometer.setUpdateInterval(100);
    Magnetometer.addListener(setData);

    return () => Magnetometer.removeAllListeners();
  }, []);

  const angle = computeAngle(data);
  const direction = computeDirection(angle);
  const directionName = directionToName[direction];
  const image = directionToImage[direction];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.info}>Direção: {directionName}</Text>
        <Text style={styles.info}>Ângulo: {angle.toFixed(2)}°</Text>
      </View>

      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    fontSize: 22,
  },
  image: {
    width: 250,
    height: 250,
  },
});
