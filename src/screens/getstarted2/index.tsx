import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Assets } from "../../resources/images/Imagepath";
import {
  window_height,
  window_width,
} from "../../resources/dimensions/dimensions";
import { Colors } from "../../resources/colors/Colors";
import { Strings } from "../../resources/strings/Strings";
import { useSelector } from "react-redux";
import { getBackgroundColor, getBtnColor, getBtnTxtColor } from "../../resources/lightdark";

export const GetStarted2 = ({ navigation }: { navigation: any }) => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <View
      style={[Style.container, { backgroundColor: getBackgroundColor(theme) }]}
    >
      <View style={Style.view1}>
        <Image style={Style.quoteicon} source={Assets.happy} />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("gender");
        }}
        style={[Style.getstartbtn,{backgroundColor:getBtnColor(theme)}]}
      >
        <Text style={[Style.getstarttxt,{color:getBtnTxtColor(theme)}]}>{Strings.continue}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Style = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  view1: { flex: 1, justifyContent: "center" },
  quoteicon: {
    height: window_height / 1.4,
    width: window_width / 1.4,
    resizeMode: "contain",
    alignSelf: "center",
  },
  bottomview: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "space-around",
    paddingTop: 20,
  },
  getstartbtn: {
    width: window_width / 1.5,
    backgroundColor: Colors.getstartbtn,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 20,
  },
  getstarttxt: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
