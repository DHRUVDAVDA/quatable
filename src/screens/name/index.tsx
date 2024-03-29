import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Assets } from "../../resources/images/Imagepath";
import {
  window_height,
  window_width,
} from "../../resources/dimensions/dimensions";
import { Colors } from "../../resources/colors/Colors";
import { Strings } from "../../resources/strings/Strings";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import {
  getBackgroundColor,
  getBtnColor,
  getBtnTxtColor,
  getNormalTxtColor,
  getPlaceHolderBackgroundColor,
} from "../../resources/lightdark";
import { updateName } from "../../redux/Slice";

export const NameScreen = ({ navigation }: { navigation: any }) => {
  const theme = useSelector((state: any) => state.theme.theme);
  const [name, setName] = useState<string>("");
  const nameRedux = useSelector((state: any) => state.name.name);
  const dispatch = useDispatch();
  console.log("nameRedux", nameRedux);

  return (
    <View
      style={[Style.container, { backgroundColor: getBackgroundColor(theme) }]}
    >
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <KeyboardAwareScrollView>
          <Image style={Style.profileicon} source={Assets.profile} />
          <Text
            style={[Style.whatsnametxt, { color: getNormalTxtColor(theme) }]}
          >
            {Strings.whatsname}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 20,
              marginVertical: 30,
            }}
          >
            <Image
              style={[
                Style.profileplaceholdericon,
                { tintColor: getNormalTxtColor(theme) },
              ]}
              source={Assets.profileicon}
            />
            <TextInput
              style={[
                Style.textinput,
                { backgroundColor: getPlaceHolderBackgroundColor(theme) },
              ]}
              placeholderTextColor={getNormalTxtColor(theme)}
              placeholder={Strings.yourname}
              onChangeText={(text) => {
                setName(text?.trim());
              }}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              if (name) {
                dispatch(updateName({ name: name }));
              }
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "getstart2",
                  },
                ],
              });
            }}
            style={[Style.getstartbtn, { backgroundColor: getBtnColor(theme),marginBottom:name.length ==0? 0:20 }]}
          >
            <Text style={[Style.getstarttxt, { color: getBtnTxtColor(theme) }]}>
              {Strings.continue}
            </Text>
          </TouchableOpacity>
          {name?.length == 0 && (
            <TouchableOpacity
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: "getstart2",
                    },
                  ],
                });
              }}
              style={[
                Style.getstartbtn,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 25,
                },
              ]}
            >
              <Text
                style={[
                  Style.getstarttxt,
                  {
                    color: Colors.splash_blue,
                    textDecorationLine: "underline",
                  },
                ]}
              >
                {Strings.skipnow}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  profileicon: {
    height: window_height / 4,
    width: window_width / 2,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 30,
  },
  profileplaceholdericon: {
    height: 15,
    width: 15,
    resizeMode: "contain",
    position: "absolute",
    left: 10,
  },
  whatsnametxt: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
    textAlign: "center",
  },
  textinput: {
    borderColor: Colors.textinputborder,
    borderWidth: 1,
    borderRadius: 10,
    width: window_width - 40,
    paddingLeft: 45,
    fontSize: 12,
    fontWeight: "500",
  },
  getstartbtn: {
    width: window_width / 1.8,
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
  rightarrowicon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginLeft: 5,
  },
});
