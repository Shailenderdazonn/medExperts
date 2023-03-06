import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const CategoriesList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.categoriesList}>
      <View style={[styles.upcomingAppointments, styles.upcomingLayout]}>
        <Text style={[styles.upcomingAppointments1, styles.categoriesTypo]}>
          Upcoming Appointments
        </Text>
        <View
          style={[styles.upcomingAppointmentsChild, styles.upcomingLayout]}
        />
        <View style={styles.upcomingAppointmentsItem} />
        <Text style={[styles.tue, styles.tueFlexBox, styles.tueTypo]}>
          <Text style={styles.text}> 12</Text>
          <Text style={styles.tue1}>Tue</Text>
        </Text>
        <Text style={styles.amDrMimContainer}>
          <Text style={styles.text}>
            <Text style={styles.am1}>
              <Text style={styles.am2}>09:30 AM</Text>
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.am1}>
              <Text style={styles.am2}> </Text>
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.am1}>
              <Text style={styles.drMimAnkhtr2}>Dr. Mim Ankhtr</Text>
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.am1}>
              <Text style={styles.drMimAnkhtr2}> </Text>
            </Text>
          </Text>
          <Text style={styles.tue1}>
            <Text style={styles.depression1}>Depression</Text>
          </Text>
        </Text>
        <Image
          style={styles.moreIcon}
          resizeMode="cover"
          source={require("../assets/more.png")}
        />
      </View>
      <View
        style={[
          styles.rectangleParent,
          styles.groupChildLayout,
          styles.groupChildLayout1,
        ]}
      >
        <LinearGradient
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupChildLayout1,
          ]}
          locations={[0, 1]}
          colors={["rgba(72, 175, 198, 0.6)", "rgba(72, 175, 198, 0.25)"]}
        />
        <Image
          style={[styles.unsplashptrhfmj2jdaIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/unsplashptrhfmj2jda.png")}
        />
        <Text
          style={[styles.getTheBestContainer, styles.bestContainerPosition]}
        >
          <Text style={styles.text}>{`Get the Best `}</Text>
          <Text style={styles.tue1}>Medical Services</Text>
        </Text>
        <Text
          style={[
            styles.weProvideBestContainer,
            styles.bestContainerPosition,
            styles.tueFlexBox,
          ]}
        >
          <Text style={styles.text}>We provide best quality medical</Text>
          <Text style={styles.tue1}> services without further cost</Text>
        </Text>
      </View>
      <View style={[styles.categoriesLists, styles.adminPosition]}>
        <View
          style={[
            styles.doctorGroup,
            styles.doctorGroupLayout,
            styles.groupPosition1,
          ]}
        >
          <View style={[styles.doctorGroupChild, styles.doctorGroupLayout]} />
          <Text style={[styles.doctor, styles.doctorTypo]}>{`Doctor  `}</Text>
        </View>
        <View
          style={[
            styles.nursesGroup,
            styles.doctorGroupLayout,
            styles.groupPosition1,
          ]}
        >
          <View style={[styles.doctorGroupChild, styles.doctorGroupLayout]} />
          <Text style={[styles.nurses, styles.doctorTypo]}>Nurses</Text>
          <Image
            style={styles.stethoscope56284971Icon}
            resizeMode="cover"
            source={require("../assets/stethoscope5628497-1.png")}
          />
        </View>
        <Pressable
          style={[styles.crechGroup, styles.groupPosition]}
          onPress={() => navigation.navigate("CrechesList")}
        >
          <View style={[styles.doctorGroupChild, styles.doctorGroupLayout]} />
          <Text style={[styles.crech, styles.crechTypo]}>Crech</Text>
          <Image
            style={[styles.crechImgIcon, styles.adminChildLayout]}
            resizeMode="cover"
            source={require("../assets/crech-img.png")}
          />
        </Pressable>
        <View style={[styles.physicianGroup, styles.groupPosition]}>
          <View style={[styles.doctorGroupChild, styles.doctorGroupLayout]} />
          <Text style={[styles.physician, styles.crechTypo]}>Physician</Text>
          <Image
            style={[styles.image5Icon, styles.bestContainerPosition]}
            resizeMode="cover"
            source={require("../assets/image-5.png")}
          />
        </View>
        <Text
          style={[
            styles.categories,
            styles.categoriesLayout,
            styles.categoriesTypo,
          ]}
        >
          Categories
        </Text>
      </View>
      <View style={[styles.searchMedical, styles.searchLayout]}>
        <View style={[styles.searchMedicalChild, styles.searchLayout]} />
        <Text style={[styles.searchMedical1, styles.adminNamePosition]}>
          Search Medical
        </Text>
        <Image
          style={[styles.searchIcon, styles.categoriesLayout]}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <Image
          style={styles.searchMedicalItem}
          resizeMode="cover"
          source={require("../assets/group-11.png")}
        />
      </View>
      <View style={[styles.admin, styles.adminPosition]}>
        <Image
          style={[styles.adminChild, styles.adminChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text
          style={[styles.adminName, styles.adminNamePosition, styles.tueTypo]}
        >
          Admin Name
        </Text>
        <Text style={styles.hello}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upcomingLayout: {
    width: 293,
    position: "absolute",
  },
  categoriesTypo: {
    color: Color.teal_100,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    top: 0,
  },
  tueFlexBox: {
    whiteSpace: "pre-wrap",
    textAlign: "left",
  },
  tueTypo: {
    fontWeight: "800",
    fontSize: FontSize.size_2xl,
  },
  groupChildLayout: {
    height: 154,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 304,
    height: 154,
  },
  bestContainerPosition: {
    left: 12,
    position: "absolute",
  },
  adminPosition: {
    width: 303,
    left: 27,
    position: "absolute",
  },
  doctorGroupLayout: {
    height: 77,
    width: 142,
    position: "absolute",
  },
  groupPosition1: {
    top: 27,
    width: 142,
  },
  doctorTypo: {
    textAlign: "center",
    fontFamily: FontFamily.latoMedium,
    top: 32,
    fontWeight: "500",
    color: Color.white,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupPosition: {
    top: 118,
    height: 77,
    width: 142,
    position: "absolute",
  },
  crechTypo: {
    top: 33,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    color: Color.white,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  adminChildLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  categoriesLayout: {
    height: 22,
    position: "absolute",
  },
  searchLayout: {
    height: 61,
    width: 304,
    position: "absolute",
  },
  adminNamePosition: {
    top: 22,
    textAlign: "left",
    position: "absolute",
  },
  upcomingAppointments1: {
    left: 7,
    textAlign: "left",
    position: "absolute",
  },
  upcomingAppointmentsChild: {
    top: 30,
    backgroundColor: "rgba(30, 107, 123, 0.89)",
    height: 108,
    borderRadius: Border.br_md,
    left: 0,
  },
  upcomingAppointmentsItem: {
    top: 41,
    backgroundColor: Color.tomato_100,
    width: 78,
    height: 84,
    left: 11,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  text: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  tue1: {
    margin: Margin.m_md,
  },
  tue: {
    top: 63,
    left: 33,
    fontFamily: FontFamily.interExtrabold,
    color: Color.whitesmoke_200,
    width: 48,
    height: 40,
    position: "absolute",
  },
  am2: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  am1: {
    color: Color.white,
  },
  drMimAnkhtr2: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  depression1: {
    fontFamily: FontFamily.interSemibold,
    color: "#ff3434",
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  amDrMimContainer: {
    top: 52,
    left: 113,
    letterSpacing: "-7.5%",
    width: 129,
    height: 76,
    textAlign: "left",
    position: "absolute",
  },
  moreIcon: {
    top: 35,
    left: 250,
    width: 25,
    height: 25,
    position: "absolute",
  },
  upcomingAppointments: {
    top: 629,
    left: 34,
    height: 138,
  },
  groupChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
  },
  unsplashptrhfmj2jdaIcon: {
    left: 160,
    width: 125,
    top: 0,
  },
  getTheBestContainer: {
    top: 34,
    fontFamily: FontFamily.latoSemibold,
    color: "#1c9679",
    width: 132,
    height: 32,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    left: 12,
    textAlign: "left",
  },
  weProvideBestContainer: {
    top: 77,
    fontSize: 8,
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
  },
  rectangleParent: {
    top: 455,
    left: 27,
  },
  doctorGroupChild: {
    backgroundColor: Color.darkslateblue,
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
  },
  doctor: {
    left: 71,
    width: 63,
    height: 25,
  },
  doctorGroup: {
    left: 0,
  },
  nurses: {
    left: 77,
    width: 55,
    height: 20,
  },
  stethoscope56284971Icon: {
    top: 16,
    left: 8,
    width: 43,
    height: 46,
    position: "absolute",
  },
  nursesGroup: {
    left: 161,
  },
  crech: {
    left: 63,
    width: 66,
  },
  crechImgIcon: {
    top: 25,
    left: 11,
  },
  crechGroup: {
    left: 161,
  },
  physician: {
    left: 60,
    width: 68,
  },
  image5Icon: {
    top: 17,
    width: 38,
    height: 44,
  },
  physicianGroup: {
    left: 0,
  },
  categories: {
    left: 4,
    width: 92,
    textAlign: "left",
  },
  categoriesLists: {
    top: 231,
    height: 195,
  },
  searchMedicalChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.whitesmoke_200,
    borderStyle: "solid",
    borderColor: "#0f6d65",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  searchMedical1: {
    left: 45,
    fontSize: FontSize.size_sm,
    color: Color.darkgray,
    width: 107,
    height: 17,
    fontFamily: FontFamily.latoRegular,
  },
  searchIcon: {
    top: 19,
    left: 22,
    width: 20,
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
  adminChild: {
    left: 268,
    top: 0,
  },
  adminName: {
    fontFamily: FontFamily.latoExtrabold,
    width: 111,
    height: 20,
    color: Color.black,
    left: 0,
  },
  hello: {
    top: 3,
    fontSize: FontSize.size_base,
    width: 75,
    height: 14,
    color: Color.black,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    position: "absolute",
  },
  admin: {
    top: 66,
    height: 42,
  },
  categoriesList: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 792,
  },
});

export default CategoriesList;
