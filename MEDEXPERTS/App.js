const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import DoctorLogin from "./screens/DoctorLogin";
import NursesList from "./screens/NursesList";
import CrechesList from "./screens/CrechesList";
import PhysicianList from "./screens/PhysicianList";
import DoctorList from "./screens/DoctorList";
import CategoriesList from "./screens/CategoriesList";
import LoginAsPatient from "./screens/LoginAsPatient";
import DoctorSignup from "./screens/DoctorSignup";
import PatientSignup from "./screens/PatientSignup";
import DoctorSignup1 from "./screens/DoctorSignup1";
import PatientSignup1 from "./screens/PatientSignup1";
import PatientLogin from "./screens/PatientLogin";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Lato: require("./assets/fonts/Lato.ttf"),
    Lato_regular: require("./assets/fonts/Lato_regular.ttf"),
    Lato_medium: require("./assets/fonts/Lato_medium.ttf"),
    Lato_semibold: require("./assets/fonts/Lato_semibold.ttf"),
    Lato_bold: require("./assets/fonts/Lato_bold.ttf"),
    Lato_extrabold: require("./assets/fonts/Lato_extrabold.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Aclonica: require("./assets/fonts/Aclonica.ttf"),
    Aclonica_regular: require("./assets/fonts/Aclonica_regular.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorLogin"
              component={DoctorLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NursesList"
              component={NursesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrechesList"
              component={CrechesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhysicianList"
              component={PhysicianList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorList"
              component={DoctorList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoriesList"
              component={CategoriesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginAsPatient"
              component={LoginAsPatient}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorSignup"
              component={DoctorSignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorSignup1"
              component={DoctorSignup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientSignup1"
              component={PatientSignup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientLogin"
              component={PatientLogin}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
