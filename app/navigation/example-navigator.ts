import { createStackNavigator } from "react-navigation"
import { FirstExampleScreen } from "../screens/first-example-screen"
import { SecondExampleScreen } from "../screens/second-example-screen"
import { GridScreen } from "../screens/GridScreen"

export const ExampleNavigator = createStackNavigator({
  firstExample: { screen: FirstExampleScreen },
  secondExample: { screen: SecondExampleScreen },
  gridScreen: { screen: GridScreen },
},
{
  headerMode: "none",
})
