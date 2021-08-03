import React from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
const DeviceDataScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.sensorContainer}>
            <View style={styles.sensor}>
              <Text style={styles.number}>20F</Text>
              <FontAwesome5
                style={styles.icon}
                name="temperature-low"
                size={24}
                color="white"
              />
              <Text style={styles.text}>Temperature</Text>
            </View>
            <View style={styles.sensor}>
              <Text style={styles.number}>50%</Text>

              <MaterialCommunityIcons
                style={styles.icon}
                name="air-humidifier"
                size={24}
                color="white"
              />
              <Text style={styles.text}>Humidity</Text>
            </View>
            <View style={styles.sensor3}>
              <Text style={styles.number}>20C</Text>
              <MaterialCommunityIcons
                style={styles.icon}
                name="coolant-temperature"
                size={24}
                color="white"
              />
              <Text style={styles.text}>Heat sensor</Text>
            </View>
            <View style={styles.camera}>
              {/* <Text style={styles.number}>20C</Text> */}
              <Feather
                style={styles.icon}
                name="video"
                size={24}
                color="white"
              />
              <Text style={styles.text}>Live View</Text>
            </View>
            <View style={styles.camera}>
              {/* <Text style={styles.number}>20C</Text> */}
              <Feather
                style={styles.icon}
                name="video"
                size={24}
                color="white"
              />
              <Text style={styles.text}>Live View</Text>
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#121212",
    width: "100%",
  },
  sensorContainer: {
    marginHorizontal: 8,
    marginVertical: 27,
    width: "90%",
    flexDirection: "row",
    // flex: 1,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  number: {
    color: "#fb5b5a",
    textAlign: "center",
    fontSize: 40,
  },
  sensor: {
    backgroundColor: "#1d1d1d",
    padding: 23,
    shadowColor: "black",
    // width: 130,
    // height: "70%",
    // width: 120,
    // height: 120,
    margin: 10,
    borderRadius: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  sensor3: {
    width: "90%",
    backgroundColor: "#1d1d1d",
    margin: 10,
    borderRadius: 6,
    padding: 23,
  },
  camera: {
    width: "90%",
    backgroundColor: "#1d1d1d",
    margin: 10,
    borderRadius: 6,
    padding: 23,
  },
  icon: {
    // backgroundColor: "red",
    fontSize: 40,
    alignSelf: "center",
  },
})

export default DeviceDataScreen
