import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const NursesList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nursesList}>
      <View style={[styles.searchMedical, styles.searchLayout]}>
        <View
          style={[
            styles.searchMedicalChild,
            styles.arrowLeft1IconPosition,
            styles.searchLayout,
          ]}
        />
        <Text style={styles.searchNurses}>Search Nurses</Text>
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
            styles.licensedPracticalNurseContainer,
            styles.containerClr,
            styles.containerTypo1,
            styles.containerTypo2,
          ]}
        >
          <Text style={styles.licensedPractical}>Licensed Practical</Text>
          <Text style={styles.nurseLpn}>Nurse (LPN)</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("CategoriesList")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text
          style={[
            styles.certifiedNursingAssistantContainer,
            styles.containerClr,
            styles.containerTypo1,
            styles.containerTypo2,
          ]}
        >
          <Text style={styles.licensedPractical}>Certified Nursing</Text>
          <Text style={styles.nurseLpn}>Assistant (CNA)</Text>
        </Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text
          style={[
            styles.surgicalAssistantRegisteredContainer,
            styles.containerClr,
            styles.containerTypo1,
          ]}
        >
          <Text style={styles.licensedPractical}>Surgical Assistant</Text>
          <Text style={styles.nurseLpn}>Registered Nurse</Text>
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Text
          style={[
            styles.certifiedNursingAssistantContainer,
            styles.containerClr,
            styles.containerTypo1,
            styles.containerTypo2,
          ]}
        >
          <Text style={styles.licensedPractical}>Registered Nurse</Text>
          <Text style={styles.nurseLpn}>(RN)</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition1]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text
          style={[
            styles.surgicalAssistantRegisteredContainer,
            styles.containerClr,
            styles.containerTypo1,
          ]}
        >
          <Text style={styles.licensedPractical}>Emergency Room</Text>
          <Text style={styles.nurseLpn}>Registered Nurse</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition1]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text
          style={[
            styles.certifiedNursingAssistantContainer,
            styles.containerClr,
            styles.containerTypo1,
            styles.containerTypo2,
          ]}
        >
          <Text style={styles.licensedPractical}>Home Care</Text>
          <Text style={styles.nurseLpn}>Registered Nurse</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text
          style={[
            styles.clinicalNurseSupervisorContainer,
            styles.containerTypo,
          ]}
        >
          <Text style={styles.licensedPractical}>Clinical Nurse</Text>
          <Text style={styles.nurseLpn}>Supervisor</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Text style={[styles.laborAndDeliveryContainer, styles.containerTypo]}>
          <Text style={styles.licensedPractical}>Labor and Delivery</Text>
          <Text style={styles.nurseLpn}>Nurse</Text>
        </Text>
      </View>
      <View style={[styles.admin, styles.adminLayout]}>
        <Text style={[styles.nursesList1, styles.containerClr]}>
          Nurses List
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
  containerClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  containerTypo1: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  containerTypo2: {
    top: 77,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
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
  containerTypo: {
    top: 74,
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
  searchNurses: {
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
  licensedPractical: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nurseLpn: {
    margin: Margin.m_md,
  },
  licensedPracticalNurseContainer: {
    left: 12,
  },
  rectangleParent: {
    left: 184,
  },
  groupItem: {
    backgroundColor: Color.darksalmon,
  },
  certifiedNursingAssistantContainer: {
    left: 11,
  },
  rectangleGroup: {
    left: 30,
  },
  groupInner: {
    backgroundColor: Color.mistyrose,
  },
  surgicalAssistantRegisteredContainer: {
    top: 80,
    left: 12,
  },
  rectangleContainer: {
    left: 184,
  },
  rectangleView: {
    backgroundColor: Color.darkseagreen,
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
  clinicalNurseSupervisorContainer: {
    left: 12,
  },
  rectangleParent3: {
    left: 184,
  },
  laborAndDeliveryContainer: {
    left: 11,
  },
  rectangleParent4: {
    left: 30,
  },
  nursesList1: {
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
  nursesList: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 792,
  },
});

export default NursesList;
