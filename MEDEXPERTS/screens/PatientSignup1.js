import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PatientSignup1 = () => {
  return (
    <View style={styles.patientSignup}>
      <View style={styles.patientSignupChild} />
      <View style={[styles.servicesRequiredButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>
          Services Required
        </Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <View style={[styles.pincodeButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>Pin Code</Text>
      </View>
      <View style={[styles.stateButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>State</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <View style={[styles.cityButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>City</Text>
      </View>
      <View style={[styles.addressButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>Address</Text>
      </View>
      <View style={[styles.ageButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>Age</Text>
      </View>
      <View style={[styles.genderButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.female, styles.maleTypo]}>Female</Text>
        <Image
          style={[styles.genderButtonItem, styles.genderLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Text style={[styles.male, styles.maleTypo]}>Male</Text>
        <Image
          style={[styles.genderButtonInner, styles.genderLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>Gender</Text>
      </View>
      <View style={[styles.mobileButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>
          Mobile Number
        </Text>
      </View>
      <View style={[styles.nameButton, styles.buttonLayout]}>
        <View style={styles.servicesRequiredButtonChild} />
        <Text style={[styles.servicesRequired, styles.maleTypo]}>
          Full Name
        </Text>
      </View>
      <View style={styles.loginText}>
        <Text style={[styles.signUp, styles.signUpTypo]}>{`Sign Up `}</Text>
      </View>
      <View style={[styles.signupButton, styles.signupLayout]}>
        <View style={[styles.signupButtonChild, styles.signupLayout]} />
        <Text style={[styles.create, styles.signUpTypo]}>Create</Text>
      </View>
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
  maleTypo: {
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    top: 0,
    position: "absolute",
  },
  genderLayout: {
    height: 12,
    width: 12,
    top: 2,
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
  patientSignupChild: {
    top: 32,
    left: 23,
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_300,
    width: 321,
    height: 724,
    position: "absolute",
  },
  servicesRequiredButtonChild: {
    top: 24,
    backgroundColor: Color.gray,
    height: 2,
    left: 0,
    width: 274,
    position: "absolute",
  },
  servicesRequired: {
    left: 10,
  },
  vectorIcon: {
    height: "26.92%",
    width: "3.65%",
    top: "23.08%",
    right: "6.2%",
    bottom: "50%",
    left: "90.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  servicesRequiredButton: {
    top: 608,
  },
  pincodeButton: {
    top: 559,
  },
  stateButton: {
    top: 509,
  },
  cityButton: {
    top: 459,
  },
  addressButton: {
    top: 409,
  },
  ageButton: {
    top: 359,
  },
  female: {
    left: 210,
  },
  genderButtonItem: {
    left: 194,
  },
  male: {
    left: 140,
  },
  genderButtonInner: {
    left: 123,
  },
  genderButton: {
    top: 309,
  },
  mobileButton: {
    top: 263,
  },
  nameButton: {
    top: 214,
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
    top: 698,
    left: 42,
    height: 37,
  },
  image2Icon: {
    top: 0,
    left: 0,
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
    flex: 1,
    width: "100%",
    height: 792,
  },
});

export default PatientSignup1;
