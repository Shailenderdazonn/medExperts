import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const DoctorList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.doctorList}>
      <View style={[styles.searchMedical, styles.searchLayout]}>
        <View
          style={[
            styles.searchMedicalChild,
            styles.arrowLeft1IconPosition,
            styles.searchLayout,
          ]}
        />
        <Text style={styles.searchDoctor}>Search Doctor</Text>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <Image
          style={styles.searchMedicalItem}
          resizeMode="cover"
          source={require("../assets/group-11.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text
          style={[
            styles.anesthesiologists,
            styles.doctorList1Clr,
            styles.cardiologistsTypo,
          ]}
        >
          Anesthesiologists
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("CategoriesList")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text
          style={[
            styles.allergistsImmunologists,
            styles.allergistsImmunologistsTypo,
          ]}
        >
          <Text style={styles.allergists}>Allergists/</Text>
          <Text style={styles.immunologists}>Immunologists</Text>
        </Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text
          style={[
            styles.colonAndRectalContainer,
            styles.allergistsImmunologistsTypo,
          ]}
        >
          <Text style={styles.allergists}>Colon and Rectal</Text>
          <Text style={styles.immunologists}>Surgeons</Text>
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Text
          style={[
            styles.cardiologists,
            styles.doctorList1Clr,
            styles.cardiologistsTypo,
          ]}
        >
          Cardiologists
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition1]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text
          style={[
            styles.anesthesiologists,
            styles.doctorList1Clr,
            styles.cardiologistsTypo,
          ]}
        >
          Dermatologists
        </Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition1]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text
          style={[
            styles.allergistsImmunologists,
            styles.allergistsImmunologistsTypo,
          ]}
        >
          <Text style={styles.allergists}>Critical Care</Text>
          <Text style={styles.immunologists}>Medicine Specialists</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.gastroenterologists, styles.endocrinologistsTypo]}>
          Gastroenterologists
        </Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Text style={[styles.endocrinologists, styles.endocrinologistsTypo]}>
          Endocrinologists
        </Text>
      </View>
      <View style={[styles.admin, styles.adminLayout]}>
        <Text style={[styles.doctorList1, styles.doctorList1Clr]}>
          Doctor List
        </Text>
        <Image
          style={[
            styles.arrowLeft1Icon,
            styles.adminLayout,
            styles.arrowLeft1IconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/arrowleft-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 61,
    width: 304,
    position: "absolute",
  },
  arrowLeft1IconPosition: {
    left: 0,
    top: 0,
  },
  rectangleLayout: {
    height: 120,
    width: 144,
    top: 259,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_md,
    height: 120,
    width: 144,
    left: 0,
    top: 0,
    position: "absolute",
  },
  doctorList1Clr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  cardiologistsTypo: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: 97,
    color: Color.black,
  },
  allergistsImmunologistsTypo: {
    top: 77,
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  groupViewPosition: {
    top: 389,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 519,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 649,
    height: 120,
    width: 144,
    position: "absolute",
  },
  endocrinologistsTypo: {
    top: 87,
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  adminLayout: {
    height: 23,
    position: "absolute",
  },
  searchMedicalChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.whitesmoke_200,
    borderStyle: "solid",
    borderColor: "#0f6d65",
    borderWidth: 1,
  },
  searchDoctor: {
    top: 22,
    left: 45,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.latoRegular,
    color: Color.darkgray,
    width: 107,
    height: 17,
    textAlign: "left",
    position: "absolute",
  },
  searchIcon: {
    top: 19,
    left: 22,
    width: 20,
    height: 22,
    position: "absolute",
  },
  searchMedicalItem: {
    top: 24,
    left: 255,
    width: 17,
    height: 12,
    position: "absolute",
  },
  searchMedical: {
    top: 146,
    left: 27,
  },
  groupChild: {
    backgroundColor: Color.forestgreen,
  },
  anesthesiologists: {
    left: 12,
  },
  rectangleParent: {
    left: 184,
  },
  groupItem: {
    backgroundColor: Color.darksalmon,
  },
  allergists: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  immunologists: {
    margin: Margin.m_md,
  },
  allergistsImmunologists: {
    left: 11,
  },
  rectangleGroup: {
    left: 30,
  },
  groupInner: {
    backgroundColor: Color.mistyrose,
  },
  colonAndRectalContainer: {
    left: 12,
  },
  rectangleContainer: {
    left: 184,
  },
  rectangleView: {
    backgroundColor: Color.darkseagreen,
  },
  cardiologists: {
    left: 11,
  },
  groupView: {
    left: 30,
  },
  rectangleParent1: {
    left: 184,
  },
  rectangleParent2: {
    left: 30,
  },
  gastroenterologists: {
    left: 12,
  },
  rectangleParent3: {
    left: 184,
  },
  endocrinologists: {
    left: 11,
  },
  rectangleParent4: {
    left: 30,
  },
  doctorList1: {
    fontSize: FontSize.size_2xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    width: 111,
    height: 20,
    left: 30,
    color: Color.black,
    top: 0,
  },
  arrowLeft1Icon: {
    width: 24,
  },
  admin: {
    top: 90,
    left: 24,
    width: 141,
  },
  doctorList: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 792,
  },
});

export default DoctorList;
