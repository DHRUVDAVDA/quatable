import LottieView from "lottie-react-native";
import React from "react";
import { Image, Modal, View } from "react-native";

export const Loader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <Modal visible={isVisible} transparent>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <LottieView
        style={{ height: 300, width: 300 }}
        source={require("../resources/images/loader.json")}
        autoPlay
        loop
      />
        </View>
     
    </Modal>
  );
};
