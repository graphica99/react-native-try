import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native"

const AuthScreen = (props) => {
  //   const productId = props.route.params.productId
  //   console.log(productId)
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onChangeUsername = () => {
    setUsername(username)
  }
  const onChangePassword = () => {
    setPassword(password)
  }

  return (
    // <SafeAreaView>
    <View style={styles.inputContainer}>
      <Text style={styles.logo}>IoTDevLab</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="User Name"
          placeholderTextColor="#fff"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#fff"
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {/* <Button style={styles.button} title="Log In" /> */}
    </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#fb5b5a",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "90%",
    backgroundColor: "#292929",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#fb5b5a",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  //   button: {
  //     marginTop: 12,
  //   },
})
export default AuthScreen
