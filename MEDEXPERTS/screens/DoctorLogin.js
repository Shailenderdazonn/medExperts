import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const DoctorLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.doctorLogin}>
      <Image
        style={styles.doctorLoginChild}
        resizeMode="cover"
        source={require("../assets/frame-1.png")}
      />
      <Text style={[styles.forgotPassword, styles.loginFlexBox]}>
        Forgot Password
      </Text>
      <Pressable
        style={[styles.signupButton, styles.signupLayout]}
        onPress={() => navigation.navigate("PatientLogin")}
      >
        <View
          style={[
            styles.signupButtonChild,
            styles.childPosition,
            styles.signupLayout,
          ]}
        />
        <Text style={[styles.login, styles.loginFlexBox]}>Login</Text>
      </Pressable>
      <Text style={[styles.hopeYouAre, styles.hopeYouAreText]}>
        Hope You Are Well Today
      </Text>
      <Text style={[styles.welcomeDoctor, styles.hopeYouAreText]}>
        <Text style={styles.welcome}>{`Welcome `}</Text>
        <Text style={styles.doctor}>Doctor</Text>
      </Text>
      <View style={[styles.ellipseParent, styles.image3IconLayout]}>
        <Image
          style={[styles.groupChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.image3Icon, styles.image3IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  signupLayout: {
    height: 37,
    width: 274,
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  hopeYouAreText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  image3IconLayout: {
    width: 232,
    position: "absolute",
  },
  doctorLoginChild: {
    top: -166,
    left: -55,
    width: 615,
    height: 880,
    position: "absolute",
  },
  forgotPassword: {
    top: 578,
    left: 124,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
  },
  signupButtonChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.tomato_100,
    left: 0,
  },
  login: {
    top: 7,
    left: 99,
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xl,
  },
  signupButton: {
    top: 531,
    left: 43,
    position: "absolute",
  },
  hopeYouAre: {
    top: 414,
    left: 65,
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    fontSize: FontSize.size_3xl,
  },
  welcome: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  doctor: {
    margin: Margin.m_md,
  },
  welcomeDoctor: {
    top: 324,
    left: 77,
    fontSize: 40,
    fontFamily: FontFamily.aclonicaRegular,
  },
  groupChild: {
    left: 12,
    width: 204,
    height: 204,
  },
  image3Icon: {
    top: 3,
    height: 232,
    left: 0,
  },
  ellipseParent: {
    top: 93,
    left: 63,
    height: 235,
  },
  doctorLogin: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.teal_100,
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

export default DoctorLogin;
