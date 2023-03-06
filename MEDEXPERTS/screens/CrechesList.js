import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const CrechesList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.crechesList}>
      <View style={[styles.searchMedical, styles.searchLayout]}>
        <View
          style={[
            styles.searchMedicalChild,
            styles.arrowLeft1IconPosition,
            styles.searchLayout,
          ]}
        />
        <Text style={styles.searchCreches}>Search Creches</Text>
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
            styles.privateOrStandContainer,
            styles.daycareContainerClr,
            styles.daycareContainerTypo,
            styles.privateContainerTypo,
          ]}
        >
          <Text style={styles.privateOrStand}>Private or Stand-</Text>
          <Text style={styles.aloneNurseries}>Alone Nurseries.</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("CategoriesList")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text
          style={[
            styles.privateDaycareChainsContainer,
            styles.daycareContainerClr,
            styles.daycareContainerTypo,
            styles.privateContainerTypo,
          ]}
        >
          <Text style={styles.privateOrStand}>{`Private Daycare `}</Text>
          <Text style={styles.aloneNurseries}>Chains</Text>
        </Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text
          style={[
            styles.inHomeDaycare,
            styles.daycareContainerClr,
            styles.daycareContainerTypo,
          ]}
        >
          In-home daycare
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Text
          style={[
            styles.privateDaycareChainsContainer,
            styles.daycareContainerClr,
            styles.daycareContainerTypo,
            styles.privateContainerTypo,
          ]}
        >
          <Text style={styles.privateOrStand}>Home Based</Text>
          <Text style={styles.aloneNurseries}>Creches</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition1]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.sharedNanny, styles.nannyTypo]}>Shared Nanny</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition1]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.nanny, styles.nannyTypo]}>Nanny</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.sharedNanny, styles.nannyTypo]}>Babysitter</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Text style={[styles.nanny, styles.nannyTypo]}>Au Pair</Text>
      </View>
      <View style={[styles.admin, styles.adminLayout]}>
        <Text style={[styles.crechesList1, styles.daycareContainerClr]}>
          Creches List
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
  daycareContainerClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  daycareContainerTypo: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  privateContainerTypo: {
    top: 77,
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
  nannyTypo: {
    top: 91,
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 649,
    height: 120,
    width: 144,
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
  searchCreches: {
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
  privateOrStand: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  aloneNurseries: {
    margin: Margin.m_md,
  },
  privateOrStandContainer: {
    left: 12,
  },
  rectangleParent: {
    left: 184,
  },
  groupItem: {
    backgroundColor: Color.darksalmon,
  },
  privateDaycareChainsContainer: {
    left: 11,
  },
  rectangleGroup: {
    left: 30,
  },
  groupInner: {
    backgroundColor: Color.mistyrose,
  },
  inHomeDaycare: {
    top: 94,
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
  sharedNanny: {
    left: 12,
  },
  rectangleParent1: {
    left: 184,
  },
  nanny: {
    left: 11,
  },
  rectangleParent2: {
    left: 30,
  },
  rectangleParent3: {
    left: 184,
  },
  rectangleParent4: {
    left: 30,
  },
  crechesList1: {
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
  crechesList: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 792,
  },
});

export default CrechesList;
