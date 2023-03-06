import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Pressable
        style={[
          styles.asPatientsButton,
          styles.buttonLayout,
          styles.buttonPosition,
        ]}
        onPress={() => navigation.navigate("PatientLogin")}
      >
        <View
          style={[
            styles.asPatientsButtonChild,
            styles.image2IconPosition,
            styles.buttonLayout,
          ]}
        />
        <Text
          style={[styles.loginAsPatientContainer, styles.loginContainerTypo]}
        >
          <Text style={styles.loginAs}>Login As</Text>
          <Text style={styles.patient}>Patient</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.asDoctorButton,
          styles.buttonLayout,
          styles.buttonPosition,
        ]}
        onPress={() => navigation.navigate("DoctorLogin")}
      >
        <View
          style={[
            styles.asPatientsButtonChild,
            styles.image2IconPosition,
            styles.buttonLayout,
          ]}
        />
        <Text
          style={[styles.loginAsDoctorContainer, styles.loginContainerTypo]}
        >
          <Text style={styles.loginAs}>Login</Text>
          <Text style={styles.loginAs}>As</Text>
          <Text style={styles.patient}>Doctor</Text>
        </Text>
      </Pressable>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.logoLayout, styles.image2IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 101,
    width: 133,
    position: "absolute",
  },
  buttonPosition: {
    top: 399,
    width: 133,
  },
  image2IconPosition: {
    left: 0,
    top: 0,
  },
  loginContainerTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 28,
    position: "absolute",
  },
  logoLayout: {
    height: 120,
    width: 250,
    position: "absolute",
  },
  loginChild: {
    top: 34,
    left: 18,
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_300,
    width: 321,
    height: 724,
    position: "absolute",
  },
  asPatientsButtonChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.teal_100,
  },
  loginAs: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  patient: {
    margin: Margin.m_md,
  },
  loginAsPatientContainer: {
    top: 15,
    width: 81,
    height: 72,
  },
  asPatientsButton: {
    left: 42,
  },
  loginAsDoctorContainer: {
    top: 19,
    width: 78,
    height: 64,
  },
  asDoctorButton: {
    left: 184,
  },
  logo: {
    top: 201,
    left: 45,
  },
  login: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 792,
  },
});

export default Login;
