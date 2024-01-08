import React, { useEffect, useRef, useState } from "react";
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
import ViewShot, { captureRef } from "react-native-view-shot";
import RNFS from "react-native-fs";
import Share from 'react-native-share';

export const Quotes = ({ navigation }: { navigation: any }) => {
  const theme = useSelector((state: any) => state.theme.theme);
  const quoteBg = useSelector((state: any) => state.quoteBg.quoteBg);
  const tags = useSelector((state: any) => state.interest.userinterest);
  const viewShotRef = useRef(null);

  const [isLoader, setIsLoader] = useState<boolean>(false);

  const [fetchedQuotes, setFetchedQuotes] = useState<QuoteType[]>([]);
  useEffect(() => {
    console.log(viewShotRef);

    setIsLoader(true);
    fetchQuotesWithTags(tags).then((data: QuoteType[]) => {
      console.log(data);

      setFetchedQuotes(data), setIsLoader(false);
    });
  }, []);

  const shareImageWithText = async () => {
    try {
      if (viewShotRef.current) {
        const filePath = await captureRef(viewShotRef, {
          format: "jpg",
          quality: 1,
        });
        console.log(filePath);

        const base64Image = await RNFS.readFile(filePath, 'base64');
    
        const shareOptions = {
          type: 'image/jpeg',
          url: filePath,
          title: 'Share via',
          message: 'Check out this image!',
          failOnCancel: false,
          imageUrl: `data:image/jpeg;base64,${base64Image}`,
        };
        
        // Handle share result
        await Share.open(shareOptions);
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <View>
      <ViewShot ref={viewShotRef}>
        <ImageBackground
          ref={viewShotRef}
          style={style.flatlistbackground}
          source={Assets[quoteBg]}
        >
          <Loader isVisible={isLoader} />
          <FlatList
            style={{ position: "absolute" }}
            data={fetchedQuotes}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            pagingEnabled
            onEndReached={() => {
              fetchQuotes().then((data) =>
                setFetchedQuotes([...fetchedQuotes, ...data])
              );
            }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  width: window_width,
                  height: window_height,
                  justifyContent: "center",
                }}
              >
                <Text style={style.contenttxt}>{item.content}</Text>
              </View>
            )}
          />
        </ImageBackground>
      </ViewShot>
      <TouchableOpacity
        style={style.settingbtn}
        onPress={() => navigation.navigate("setting")}
      >
        <Text style={style.settingtxt}>{Strings.settings}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.sharebtn} onPress={shareImageWithText}>
        <Image style={style.sharelogo} source={Assets.share} />
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
  sharebtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: Colors.getstartbtn,
    borderRadius: 15,
  },
  sharelogo: { height: 20, width: 20, resizeMode: "contain", margin: 10 },
  settingtxt: { color: Colors.white, margin: 10 },
});
