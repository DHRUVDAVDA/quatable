import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import { Assets } from "../../resources/images/Imagepath";
import {
  window_height,
  window_width,
} from "../../resources/dimensions/dimensions";
import { Colors } from "../../resources/colors/Colors";
import { createChannel } from "./Splash";

//This is splash screen which open for the few seconds
export const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    setTimeout(() => {
      createChannel();
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "getstart",
          },
        ],
      });
    }, 2000);
  }, []);
  return (
    <View style={Style.container}>
      <ImageBackground
        style={Style.splashbackground}
        source={Assets.splash_background}
      >
        <View style={Style.bluebox}>
          <Image style={Style.colon} source={Assets.colon} />
          <Image style={Style.colon} source={Assets.colon} />
        </View>
      </ImageBackground>
    </View>
  );
};
const Style = StyleSheet.create({
  container: { flex: 1 },
  splashbackground: { justifyContent: "center", alignItems: "center", flex: 1 },
  bluebox: {
    height: 100,
    width: 100,
    backgroundColor: Colors.splash_blue,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  colon: { height: 40, width: 25, resizeMode: "contain", alignSelf: "center" },
});
