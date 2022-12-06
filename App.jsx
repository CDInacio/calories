import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesOverview from "./src/screens/CategoriesOverview";
import SingleCategoryScreen from "./src/screens/SingleCategoryScreen";
import SubcategoryScreen from "./src/screens/SubcategoryScreen";
import FoodDetailsScreen from "./src/screens/FoodDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) return;

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesOverview"
          component={CategoriesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingleCategory"
          component={SingleCategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Subcategory"
          component={SubcategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodDetails"
          component={FoodDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
