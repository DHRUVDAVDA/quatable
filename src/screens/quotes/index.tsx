import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { fetchQuotes } from "./Quotes";
import {
  window_height,
  window_width,
} from "../../resources/dimensions/dimensions";

export const Quotes = ({ navigation }: { navigation: any }) => {
  const [fetchedQuotes, setFetchedQuotes] = useState([]);
  useEffect(() => {
    fetchQuotes().then((data) => setFetchedQuotes(data));
  }, []);
  return (
    <View>
      <FlatList
        data={fetchedQuotes}
        keyExtractor={(index, item) => index.toString()}
        horizontal
        pagingEnabled
        onEndReached={()=>{fetchQuotes().then((data) => setFetchedQuotes([...fetchedQuotes, ...data])
            )}}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                height: window_height,
                width: window_width,
                backgroundColor: "red",
                justifyContent:'center'
              }}
            >
              <Text style={{ color: "black", width: window_width / 2,alignSelf:'center',textAlign:'center' }}>
                {item.content}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
