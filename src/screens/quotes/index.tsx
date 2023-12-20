import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { QuoteType, fetchQuotes } from "./Quotes";
import {
  window_height,
  window_width,
} from "../../resources/dimensions/dimensions";
import { useSelector } from "react-redux";
import { Colors } from "../../resources/colors/Colors";
import { Strings } from "../../resources/strings/Strings";

export const Quotes = ({ navigation }: { navigation: any }) => {
  const theme = useSelector((state: any) => state.theme.theme);

  const [fetchedQuotes, setFetchedQuotes] = useState<QuoteType[]>([]);
  useEffect(() => {
    fetchQuotes().then((data: QuoteType[]) => setFetchedQuotes(data));
  }, []);
  return (
    <View>
      <FlatList
        data={fetchedQuotes}
        keyExtractor={(index, item) => index?.toString()}
        horizontal
        pagingEnabled
        onEndReached={() => {
          fetchQuotes().then((data) =>
            setFetchedQuotes([...fetchedQuotes, ...data])
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={style.flatlistbackground}>
              <Text style={style.contenttxt}>{item.content}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity style={style.settingbtn} onPress={()=>navigation.navigate('setting')}>
        <Text style={style.settingtxt}>{Strings.settings}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  flatlistbackground: {
    height: window_height,
    width: window_width,
    backgroundColor: "red",
    justifyContent: "center",
  },
  contenttxt: {
    color: "black",
    width: window_width / 2,
    alignSelf: "center",
    textAlign: "center",
  },
  settingbtn: { position: "absolute", top: 0, right: 0 },
  settingtxt:{ color: Colors.white, margin: 10 }
});
