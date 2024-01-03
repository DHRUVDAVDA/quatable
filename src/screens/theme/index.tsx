import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Colors } from "../../resources/colors/Colors";
import { Assets } from "../../resources/images/Imagepath";
import {
  window_height,
  window_width,
} from "../../resources/dimensions/dimensions";
import { Strings } from "../../resources/strings/Strings";
import { ThemeImages } from "./Theme";
import { useDispatch } from "react-redux";
import { changeQuoteBg } from "../../redux/Slice";

export const Theme = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch()
  return (
    <View style={Style.container}>
      <Image style={Style.watch} source={Assets.themehead} />
      <Text style={Style.identitytxt}>{Strings.themetxt1}</Text>
      <FlatList
        data={ThemeImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <View>
                <TouchableOpacity onPress={()=>{dispatch(changeQuoteBg({quoteBg:item.bg}))}}>
              <Image
                style={{
                  width: (window_width - 60) / 3,
                  height: (window_width - 60) / 3,
                  margin: 10,
                }}
                source={item.imagepath}
              />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={Style.btmview}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("lifearea");
          }}
          style={Style.getstartbtn}
        >
          <Text style={Style.getstarttxt}>{Strings.continue}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  identitytxt: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
    textAlign: "center",
    paddingVertical: 15,
  },
  widgets2txt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.lightgreytxt,
    textAlign: "center",
  },
  watch: {
    resizeMode: "contain",
    width: window_width / 2,
    alignSelf: "center",
    height: window_height / 4,
    marginTop: 20,
  },
  getstartbtn: {
    width: window_width / 1.8,
    backgroundColor: Colors.getstartbtn,
    alignSelf: "center",
    borderRadius: 10,
  },
  getstarttxt: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  btmview: { flex: 1, justifyContent: "flex-end", marginBottom: 20 ,position:'absolute',bottom:0,alignSelf:'center'},
  feelingbox: {
    borderWidth: 1,
    borderRadius: 10,
    width: window_width / 3,
    borderColor: Colors.textinputborder,
    margin: 10,
  },
  feelingtxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
    textAlign: "center",
    marginVertical: 10,
  },
});
