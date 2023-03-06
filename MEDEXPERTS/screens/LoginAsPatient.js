import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginAsPatient = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginAsPatient}>
      <View style={styles.loginAsPatientChild} />
      <Text style={[styles.dontHaveAnContainer, styles.forgotPasswordTypo]}>
        <Text style={styles.dontHaveAn}>{`Don't have an account? `}</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </Text>
      <Pressable
        style={[styles.signupButton, styles.signupLayout]}
        onPress={() => navigation.navigate("CategoriesList")}
      >
        <View
          style={[
            styles.signupButtonChild,
            styles.loginPosition,
            styles.signupLayout,
          ]}
        />
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </Pressable>
      <View style={styles.password}>
        <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
          Forgot Password
        </Text>
        <Text style={[styles.password1, styles.email1Typo]}>Password</Text>
        <Image
          style={[styles.passwordChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/line-2.png")}
        />
        <Image
          style={styles.hide1Icon}
          resizeMode="cover"
          source={require("../assets/hide-1.png")}
        />
      </View>
      <View style={styles.email}>
        <Text style={[styles.email1, styles.email1Typo]}>Email</Text>
        <Image
          style={[styles.emailChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/line-2.png")}
        />
      </View>
      <View style={styles.loginText}>
        <Text style={[styles.login, styles.logInTypo, styles.loginPosition]}>
          Login
        </Text>
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.logoLayout, styles.loginPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  signupLayout: {
    height: 37,
    width: 274,
    position: "absolute",
  },
  loginPosition: {
    left: 0,
    top: 0,
  },
  logInTypo: {
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
  },
  email1Typo: {
    fontSize: FontSize.size_2xl,
    left: 0,
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  childLayout: {
    height: 1,
    width: 267,
    left: 3,
    position: "absolute",
  },
  logoLayout: {
    height: 120,
    width: 250,
    position: "absolute",
  },
  loginAsPatientChild: {
    top: 34,
    left: 18,
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_300,
    width: 321,
    height: 724,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.dimgray,
  },
  signUp: {
    color: Color.darkslateblue,
  },
  dontHaveAnContainer: {
    top: 621,
    left: 78,
  },
  signupButtonChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.teal_100,
  },
  logIn: {
    top: 7,
    left: 99,
    color: Color.white,
  },
  signupButton: {
    top: 513,
    left: 42,
  },
  forgotPassword: {
    top: 42,
    left: 168,
    color: Color.dimgray,
  },
  password1: {
    top: 2,
  },
  passwordChild: {
    top: 28,
  },
  hide1Icon: {
    left: 248,
    width: 26,
    height: 26,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  password: {
    top: 436,
    height: 58,
    width: 274,
    left: 42,
    position: "absolute",
  },
  email1: {
    top: 0,
  },
  emailChild: {
    top: 25,
  },
  email: {
    top: 388,
    width: 270,
    height: 27,
    left: 42,
    position: "absolute",
  },
  login: {
    color: Color.darkslateblue,
  },
  loginText: {
    top: 328,
    left: 151,
    width: 55,
    height: 23,
    position: "absolute",
  },
  logo: {
    top: 171,
    left: 45,
  },
  loginAsPatient: {
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

export default LoginAsPatient;
