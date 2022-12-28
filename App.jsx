import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoriesOverview from "./src/screens/CategoriesOverview";
import SingleCategoryScreen from "./src/screens/SingleCategoryScreen";
import SubcategoryScreen from "./src/screens/SubcategoryScreen";
import SearchScreen from "./src/screens/SearchScreen";
import Icon from "./src/components/UI/Icon";
import AuthContextProvider from "./src/context/auth-context";
import SingleFoodScreen from "./src/screens/SingleFoodScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return <Tab.Navigator></Tab.Navigator>;
};

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={CategoriesOverview}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={size}
              color={focused ? "#365EFE" : "#292929"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name="search"
              size={size}
              color={focused ? "#365EFE" : "#292929"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Category"
        component={SingleCategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Subcategory"
        component={SubcategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleFood"
        component={SingleFoodScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export function Root() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) return;

  return <NavigationContainer>{<StackNavigation />}</NavigationContainer>;
}

export default function App() {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}
