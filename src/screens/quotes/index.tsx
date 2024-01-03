import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
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
import { Assets } from "../../resources/images/Imagepath";

export const Quotes = ({ navigation }: { navigation: any }) => {
  const theme = useSelector((state: any) => state.theme.theme);
  const quoteBg = useSelector((state: any) => state.quoteBg.quoteBg);
  console.log(quoteBg);

  const [fetchedQuotes, setFetchedQuotes] = useState<QuoteType[]>([]);
  useEffect(() => {
    fetchQuotes().then((data: QuoteType[]) => setFetchedQuotes(data));
  }, []);
  return (
    <View>
       <ImageBackground style={style.flatlistbackground}  source={Assets[quoteBg]}>
      <FlatList
        style={{ position: "absolute" }}
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
           <View style={{width:window_width,height:window_height,justifyContent:'center'}}>
            <Text style={style.contenttxt}>{item.content}</Text>
           </View>
              
           
          );
        }}
      />
       </ImageBackground>
      <TouchableOpacity
        style={style.settingbtn}
        onPress={() => navigation.navigate("setting")}
      >
        <Text style={style.settingtxt}>{Strings.settings}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  flatlistbackground: {
    height: window_height,
    width: window_width,
    justifyContent: "center",
  },
  contenttxt: {
    color: Colors.white,
    width: window_width / 2,
    alignSelf: "center",
    textAlign: "center",
  },
  settingbtn: { position: "absolute", top: 0, right: 0 },
  settingtxt: { color: Colors.white, margin: 10 },
});
