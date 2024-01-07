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
import { QuoteType, fetchQuotes, fetchQuotesWithTags } from "./Quotes";
import {
  window_height,
  window_width,
} from "../../resources/dimensions/dimensions";
import { useSelector } from "react-redux";
import { Colors } from "../../resources/colors/Colors";
import { Strings } from "../../resources/strings/Strings";
import { Assets } from "../../resources/images/Imagepath";
import { Loader } from "../../component/loader";

export const Quotes = ({ navigation }: { navigation: any }) => {
  const theme = useSelector((state: any) => state.theme.theme);
  const quoteBg = useSelector((state: any) => state.quoteBg.quoteBg);
  const tags = useSelector((state: any) => state.interest.userinterest)
  console.log(tags);
  
  const [isLoader, setIsLoader] = useState<boolean>(false);

  const [fetchedQuotes, setFetchedQuotes] = useState<QuoteType[]>([]);
  useEffect(() => {
    setIsLoader(true);
    fetchQuotesWithTags(tags).then((data: QuoteType[]) => {
      console.log(data);
      
      setFetchedQuotes(data), setIsLoader(false);
    });
  }, []);
  return (
    <View>
      <ImageBackground
        style={style.flatlistbackground}
        source={Assets[quoteBg]}
      >
        <Loader isVisible={isLoader} />
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
              <View
                style={{
                  width: window_width,
                  height: window_height,
                  justifyContent: "center",
                }}
              >
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
