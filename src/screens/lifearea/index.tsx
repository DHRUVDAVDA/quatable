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
import { FEELINGS2 } from "../feeling2/Feeling2";
import { LIFEAREA } from "./LifeArea";
import { useSelector } from "react-redux";
import { getBackgroundColor, getBtnColor, getBtnTxtColor, getNormalTxtColor, getPlaceHolderBackgroundColor } from "../../resources/lightdark";


export const LifeArea = ({ navigation }: { navigation: any }) => {
  const theme: string = useSelector((state: any) => state.theme.theme);
  const [selectedFeeling, setSelectedFeeling] = useState<string>(
    LIFEAREA[0].item
  );
  return (
    <View
    style={[Style.container, {backgroundColor: getBackgroundColor(theme)}]}>
      <Image style={Style.watch} source={Assets.lifearea} />
      <Text style={[Style.identitytxt,{color:getNormalTxtColor(theme)}]}>{Strings.lifearea1}</Text>
      <FlatList
        contentContainerStyle={{ alignItems: "center", marginTop: 10 }}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={LIFEAREA}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={[
                Style.feelingbox,
                {
                  backgroundColor:
                    selectedFeeling == item.item
                      ? Colors.splash_blue
                      : getPlaceHolderBackgroundColor(theme),
                },
              ]}
              onPress={() => {
                setSelectedFeeling(item.item);
              }}
            >
              <Text
                style={[
                  Style.feelingtxt,
                  {
                    color:
                      selectedFeeling == item.item
                        ? Colors.white
                        : getNormalTxtColor(theme),
                  },
                ]}
              >
                {item.item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={Style.btmview}>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "interest",
                },
              ],
            });
          }}
          style={[Style.getstartbtn,{backgroundColor:getBtnColor(theme)}]}>
          <Text style={[Style.getstarttxt,{color:getBtnTxtColor(theme)}]}>{Strings.continue}</Text>
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
    marginTop: 67,
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
    borderRadius: 10,
    width: window_width / 2.5,
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
