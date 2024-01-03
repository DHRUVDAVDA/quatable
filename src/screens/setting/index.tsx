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
    <View>
      <Text style={style.headtxt}>{Strings.settings}</Text>
      <FlatList
        data={settingOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={style.itemview}
              onPress={() => {
                console.log('lala');
                
                PushNotification.localNotificationSchedule({
                  channelId: "test-Channel",
                  title: "Spendable",
                  message: "Have you logged your transaction?",
                  date: new Date(Date.now() + 2 * 1000), // Create a new Date object
                  allowWhileIdle: true,
                  repeatType: "week",
                });
              }}
            >
              <Text style={style.itemtxt}>{item.name}</Text>
              {index == 1 && (
                <Switch
                  style={style.switchstyle}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
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
