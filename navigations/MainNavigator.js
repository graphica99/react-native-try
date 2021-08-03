import React from "react"
import {
  createStackNavigator,
  HeaderBackground,
  HeaderTitle,
} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { Platform } from "react-native"
import Colors from "../constants/Colors"

import AuthScreen from "../screens/user/Auth"
import HomeScreen from "../screens/Home"
const StackNavigator = createStackNavigator()

const ShopNavigator = () => {
  const isLoggedIn = true
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        {!isLoggedIn ? (
          <StackNavigator.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{ headerTransparent: true, headerTitle: "" }}
          />
        ) : (
          <StackNavigator.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerTintColor: "white",
            }}
          />
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator
// const ProductsNavigation = createStackNavigator(
//   {
//     productsOverview: ProductOverviewScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === "android" ? Colors.primary : "",
//       },
//       headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
//     },
//   }
// )

// export default createAppContainer(ProductsNavigation)
