import * as React from "react";
import { useState } from "react";
import RectangleComponent7 from "../components/Rectangle47";
import RectangleComponent6 from "../components/Rectangle46";
import RectangleComponent5 from "../components/Rectangle45";
import RectangleComponent4 from "../components/Rectangle44";
import RectangleComponent3 from "../components/Rectangle43";
import RectangleComponent2 from "../components/Rectangle42";
import RectangleComponent1 from "../components/Rectangle41";
import RectangleComponent from "../components/Rectangle4";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PatientSignup = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <RectangleComponent7 />,
    <RectangleComponent6 />,
    <RectangleComponent5 />,
    <RectangleComponent4 />,
    <RectangleComponent3 />,
    <RectangleComponent2 />,
    <RectangleComponent1 />,
    <RectangleComponent />,
  ]);
  const [drawerItemsActive] = useState([
    <RectangleComponent7 />,
    <RectangleComponent6 />,
    <RectangleComponent5 />,
    <RectangleComponent4 />,
    <RectangleComponent3 />,
    <RectangleComponent2 />,
    <RectangleComponent1 />,
    <RectangleComponent />,
  ]);
  const stateIndex = !state ? 0 : state.index;
  return (
    <View style={styles.patientSignup}>
      <View style={[styles.servicesRequiredButton, styles.buttonLayout]}>
        {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
        <Text style={styles.servicesRequired}>Services Required</Text>
        <Image
          style={[styles.vectorIcon, styles.arrow2Position]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.pincodeButton, styles.buttonLayout]}>
        {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
        <Text style={styles.servicesRequired}>Pin Code</Text>
      </View>
      <View style={[styles.stateButton, styles.buttonLayout]}>
        {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
        <Text style={styles.servicesRequired}>State</Text>
        <Image
          style={[styles.vectorIcon, styles.arrow2Position]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.cityButton, styles.buttonLayout]}>
        {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
        <Text style={styles.servicesRequired}>City</Text>
      </View>
      <View style={[styles.addressButton, styles.buttonLayout]}>
        {stateIndex === 4 ? drawerItemsActive[4] : drawerItemsNormal[4]}
        <Text style={styles.servicesRequired}>Address</Text>
      </View>
      <View style={[styles.streelButton, styles.buttonLayout]}>
        {stateIndex === 5 ? drawerItemsActive[5] : drawerItemsNormal[5]}
        <Text style={styles.servicesRequired}>Streel / Flat / House No</Text>
      </View>
      <View style={[styles.mobileButton, styles.buttonLayout]}>
        {stateIndex === 6 ? drawerItemsActive[6] : drawerItemsNormal[6]}
        <Text style={styles.servicesRequired}>Mobile Number</Text>
      </View>
      <View style={[styles.nameButton, styles.buttonLayout]}>
        {stateIndex === 7 ? drawerItemsActive[7] : drawerItemsNormal[7]}
        <Text style={styles.servicesRequired}>Full Name</Text>
      </View>
      <View style={styles.loginText}>
        <Text style={[styles.signUp, styles.signUpTypo]}>{`Sign Up `}</Text>
      </View>
      <View style={[styles.arrow2, styles.arrow2Position]} />
      <Pressable
        style={[styles.signupButton, styles.signupLayout]}
        onPress={() => navigation.navigate("PatientLogin")}
      >
        <View
          style={[
            styles.signupButtonChild,
            styles.image2IconPosition,
            styles.signupLayout,
          ]}
        />
        <Text style={[styles.create, styles.signUpTypo]}>Create</Text>
      </Pressable>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.logoLayout, styles.image2IconPosition]}
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
  image2IconPosition: {
    left: 0,
    top: 0,
  },
  logoLayout: {
    height: 52,
    width: 109,
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
    top: 564,
  },
  pincodeButton: {
    top: 464,
  },
  stateButton: {
    top: 414,
  },
  cityButton: {
    top: 364,
  },
  addressButton: {
    top: 314,
  },
  streelButton: {
    top: 264,
  },
  mobileButton: {
    top: 514,
  },
  nameButton: {
    top: 214,
  },
  signUp: {
    left: -10,
    color: Color.darkslateblue,
    top: 0,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
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
  },
  create: {
    top: 7,
    left: 99,
    color: Color.white,
  },
  signupButton: {
    top: 638,
    left: 42,
    height: 37,
  },
  logo: {
    top: 64,
    left: 124,
  },
  patientSignup: {
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
    width: 357,
    height: 792,
  },
});

export default PatientSignup;
