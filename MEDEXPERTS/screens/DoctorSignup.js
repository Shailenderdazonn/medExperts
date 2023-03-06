import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DoctorSignup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.doctorSignup}>
      <View style={[styles.servicesRequiredButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>Services Required</Text>
        <Image
          style={[styles.vectorIcon, styles.arrow2Position]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.mobileButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>Mobile Number</Text>
      </View>
      <View style={[styles.pincodeButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>Pin Code</Text>
      </View>
      <View style={[styles.stateButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>State</Text>
        <Image
          style={[styles.vectorIcon, styles.arrow2Position]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.cityButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>City</Text>
      </View>
      <View style={[styles.addressButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>Address</Text>
      </View>
      <View style={[styles.streelButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>Streel / Flat / House No</Text>
      </View>
      <View style={[styles.nameButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>Full Name</Text>
      </View>
      <View style={[styles.nameButton1, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={styles.servicesRequired}>Specialization</Text>
      </View>
      <View style={styles.loginText}>
        <Text style={[styles.signUp, styles.signUpTypo]}>{`Sign Up `}</Text>
      </View>
      <View style={[styles.arrow2, styles.arrow2Position]} />
      <Pressable
        style={[styles.signupButton, styles.signupLayout]}
        onPress={() => navigation.navigate("DoctorLogin")}
      >
        <View style={[styles.signupButtonChild, styles.signupLayout]} />
        <Text style={[styles.create, styles.signUpTypo]}>Create</Text>
      </Pressable>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.image2Icon, styles.logoLayout]}
          resizeMode="cover"
          source={require("../assets/image-22.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 26,
    width: 274,
    left: 42,
    position: "absolute",
  },
  arrow2Position: {
    overflow: "hidden",
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
  },
  signupLayout: {
    height: 37,
    width: 274,
    position: "absolute",
  },
  logoLayout: {
    height: 52,
    width: 109,
    position: "absolute",
  },
  servicesRequiredButtonChild: {
    top: 24,
    backgroundColor: Color.whitesmoke_100,
    height: 2,
    left: 0,
    width: 274,
    position: "absolute",
  },
  servicesRequired: {
    left: 10,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    color: Color.silver,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "26.92%",
    width: "3.65%",
    top: "23.08%",
    right: "6.2%",
    bottom: "50%",
    left: "90.15%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  servicesRequiredButton: {
    top: 614,
  },
  mobileButton: {
    top: 564,
  },
  pincodeButton: {
    top: 514,
  },
  stateButton: {
    top: 464,
  },
  cityButton: {
    top: 414,
  },
  addressButton: {
    top: 364,
  },
  streelButton: {
    top: 314,
  },
  nameButton: {
    top: 214,
  },
  nameButton1: {
    top: 264,
  },
  signUp: {
    left: -10,
    color: Color.darkslateblue,
    top: 0,
  },
  loginText: {
    top: 148,
    left: 151,
    width: 55,
    height: 23,
    position: "absolute",
  },
  arrow2: {
    top: 448,
    left: 260,
    width: 32,
    height: 32,
  },
  signupButtonChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.tomato_100,
    top: 0,
    left: 0,
  },
  create: {
    top: 7,
    left: 99,
    color: Color.white,
  },
  signupButton: {
    top: 688,
    left: 42,
    height: 37,
  },
  image2Icon: {
    top: 0,
    left: 0,
  },
  logo: {
    top: 64,
    left: 133,
  },
  doctorSignup: {
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

export default DoctorSignup;
