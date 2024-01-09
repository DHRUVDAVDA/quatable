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
import { useDispatch, useSelector } from "react-redux";
import {
  getBackgroundColor,
  getBtnColor,
  getBtnTxtColor,
  getNormalTxtColor,
  getPlaceHolderBackgroundColor,
} from "../../resources/lightdark";
import { interestArr } from "./Interest";
import { updateNewUser, updateUserInterest } from "../../redux/Slice";

export const Interest = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const theme: string = useSelector((state: any) => state.theme.theme);
  const tags = useSelector((state: any) => state.interest.userinterest);
  const { fromSetting } = route.params || {};
  console.log('tags',tags);
  
  const [selectedInterest, setSelectedInterest] = useState<string[]>(fromSetting ? tags : [
   interestArr[0],
  ]);
  const newuser = useSelector((state: any) => state.newuser.newuser);
  
  const dispatch = useDispatch();
  return (
    <View
      style={[Style.container, { backgroundColor: getBackgroundColor(theme) }]}
    >
      <Image style={Style.watch} source={Assets.lifearea} />
      <Text style={[Style.identitytxt, { color: getNormalTxtColor(theme) }]}>
        {Strings.interest}
      </Text>
      <FlatList
        contentContainerStyle={{
          alignSelf: "center",
          marginTop: 10,
          paddingBottom: 100,
        }}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={interestArr}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={[
                Style.feelingbox,
                {
                  backgroundColor: selectedInterest.includes(item)
                    ? Colors.splash_blue
                    : getPlaceHolderBackgroundColor(theme),
                },
              ]}
              onPress={() => {
                const isItemSelected = selectedInterest.includes(item);
                const isSelectedInterestFull = selectedInterest.length >= 5;

                if (isItemSelected && selectedInterest.length > 1) {
                  const updatedSelectedInterest = selectedInterest.filter(
                    (selectedItem) => selectedItem !== item
                  );
                  setSelectedInterest(updatedSelectedInterest);
                } else if (!isItemSelected && !isSelectedInterestFull) {
                  setSelectedInterest([...selectedInterest, item]);
                }
              }}
            >
              <Text
                style={[
                  Style.feelingtxt,
                  {
                    color: selectedInterest.includes(item)
                      ? Colors.white
                      : getNormalTxtColor(theme),
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={Style.btmview}>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateUserInterest({ userinterest: selectedInterest }));
            dispatch(updateNewUser({ newuser: false }));
            fromSetting
              ? navigation.goBack()
              : navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: "quotes",
                    },
                  ],
                });
          }}
          style={[Style.getstartbtn, { backgroundColor: getBtnColor(theme) }]}
        >
          <Text style={[Style.getstarttxt, { color: getBtnTxtColor(theme) }]}>
            {fromSetting ? Strings.save : Strings.continue}
          </Text>
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
  btmview: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
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
