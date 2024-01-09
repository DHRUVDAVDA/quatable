import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { settingOptions } from "./Setting";
import { Colors } from "../../resources/colors/Colors";
import { changeTheme } from "../../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Strings } from "../../resources/strings/Strings";
import PushNotification from "react-native-push-notification";
import { getBackgroundColor, getNormalTxtColor } from "../../resources/lightdark";

export const Setting = ({ navigation }: { navigation: any }) => {
  const theme = useSelector((state: any) => state.theme.theme);
  const [isEnabled, setIsEnabled] = useState<boolean>(
    theme == "DARK" ? true : false
  );
  console.log(theme);

  const dispatch = useDispatch();
  const toggleSwitch = () => {
    const newTheme = theme == 'DARK' ? 'LIGHT' : 'DARK';
    setIsEnabled((previousState) => !previousState);
    dispatch(changeTheme({ theme: newTheme }));
};

  return (
   <View
    style={{flex:1,backgroundColor: getBackgroundColor(theme)}}>
      <Text style={[style.headtxt,{color:getNormalTxtColor(theme)}]}>{Strings.settings}</Text>
      <FlatList
        data={settingOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={[style.itemview,{borderColor:getNormalTxtColor(theme)}]}
              onPress={() => {
                let screenToNavigate = null;

                switch(index) {
                  case 2:
                    screenToNavigate = 'reminder';
                    break;
                  case 3:
                    screenToNavigate = 'interest';
                    break;
                  case 4:
                    screenToNavigate = 'theme';
                    break;
                  default:
                    screenToNavigate = null;
                }
              
                if (screenToNavigate) {
                  navigation.navigate(screenToNavigate,{fromSetting:true});
                }
                
                
              }}
            >
              <Text style={[style.itemtxt,{color:getNormalTxtColor(theme)}]}>{item.name}</Text>
              {index == 1 && (
                <Switch
                  style={style.switchstyle}
                  trackColor={{ false: Colors.black, true: Colors.white }}
                  thumbColor={Colors.splash_blue}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  itemview: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: Colors.black,
    paddingVertical: 9,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemtxt: { color: Colors.black, paddingLeft: 20, fontSize: 15 },
  headtxt: {
    color: Colors.black,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  switchstyle: { alignSelf: "center", position: "absolute", right: 20 },
});
