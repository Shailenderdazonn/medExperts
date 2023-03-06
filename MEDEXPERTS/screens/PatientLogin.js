import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PatientLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.patientLogin}>
      <Image
        style={styles.patientLoginChild}
        resizeMode="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <View style={styles.dontHaveAnAccountSignUpWrapper}>
        <Text style={styles.dontHaveAnContainer}>
          <Text style={styles.dontHaveAn}>{`Don't have an account? `}</Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.signupButton, styles.emailParentPosition]}
        onPress={() => navigation.navigate("CategoriesList")}
      >
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </Pressable>
      <View style={[styles.frameParent, styles.logoPosition]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/line-2.png")}
          />
          <Text style={[styles.forgotPassword, styles.mt12]}>
            Forgot Password
          </Text>
        </View>
        <View style={styles.passwordParent}>
          <Text style={[styles.password, styles.emailTypo]}>Password</Text>
          <Image
            style={[styles.hideIcon, styles.ml169]}
            resizeMode="cover"
            source={require("../assets/hide.png")}
          />
        </View>
      </View>
      <View style={[styles.emailParent, styles.emailParentPosition]}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <Image
          style={[styles.frameItem, styles.mt3, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
      </View>
      <View style={styles.patientLoginWrapper}>
        <Text style={[styles.patientLogin1, styles.logInTypo]}>
          Patient Login
        </Text>
      </View>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={[styles.image2Icon, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  ml169: {
    marginLeft: 169,
  },
  mt3: {
    marginTop: 3,
  },
  emailParentPosition: {
    left: 42,
    position: "absolute",
  },
  logInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  logoPosition: {
    left: 45,
    position: "absolute",
  },
  emailTypo: {
    fontSize: FontSize.size_2xl,
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameItemLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  patientLoginChild: {
    top: 316,
    left: 18,
    width: 321,
    height: 339,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.dimgray,
  },
  signUp: {
    color: Color.darkslateblue,
  },
  dontHaveAnContainer: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  dontHaveAnAccountSignUpWrapper: {
    top: 601,
    left: 78,
    width: 201,
    flexDirection: "row",
    position: "absolute",
  },
  logIn: {
    color: Color.white,
    flex: 1,
  },
  signupButton: {
    top: 513,
    borderRadius: Border.br_xs,
    backgroundColor: Color.tomato_100,
    width: 259,
    paddingHorizontal: 0,
    paddingVertical: 7,
    flexDirection: "row",
  },
  frameChild: {
    height: 1,
    width: 267,
  },
  forgotPassword: {
    textAlign: "right",
    color: Color.dimgray,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
  },
  vectorParent: {
    top: 27,
    left: 4,
    position: "absolute",
  },
  password: {
    flex: 1,
  },
  hideIcon: {
    width: 25,
    height: 20,
  },
  passwordParent: {
    top: 2,
    left: -3,
    width: 274,
    flexDirection: "row",
    position: "absolute",
  },
  frameParent: {
    top: 436,
    width: 271,
    height: 30,
  },
  email: {
    alignSelf: "stretch",
  },
  frameItem: {
    height: 1,
  },
  emailParent: {
    top: 388,
    width: 267,
  },
  patientLogin1: {
    alignSelf: "stretch",
    color: Color.darkslateblue,
  },
  patientLoginWrapper: {
    top: 328,
    left: 115,
    width: 127,
    position: "absolute",
  },
  image2Icon: {
    height: 120,
  },
  logo: {
    top: 171,
    width: 250,
  },
  patientLogin: {
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
    height: 792,
    width: "100%",
    flex: 1,
  },
});

export default PatientLogin;
