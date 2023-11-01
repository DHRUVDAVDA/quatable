import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../resources/colors/Colors";
import { Assets } from "../../resources/images/Imagepath";
import { window_height, window_width } from "../../resources/dimensions/dimensions";
import { Strings } from "../../resources/strings/Strings";
import { identity } from "./Gender";


export const Gender = () => {
    const [selectedIdentity, setSelectedIdentity] = useState<string>('')
    return (
        <View style={Style.container}>
            <View style={Style.imagecontainer}><Image style={Style.icon} source={Assets.girl} /><Image style={Style.icon} source={Assets.boy} /></View>
            <Text style={Style.identitytxt}>{Strings.identity}</Text>
            <FlatList data={identity}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={[Style.btnvire, { backgroundColor: selectedIdentity == item.name ? Colors.splash_blue : Colors.white}]} onPress={() => { setSelectedIdentity(item.name) }}><Text style={Style.identitytxt}>{item.name}</Text></TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
const Style = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    imagecontainer: {
        flexDirection: 'row', justifyContent: 'center'
    },
    icon: { height: window_height / 4, width: window_width / 4, resizeMode: 'contain' },
    identitytxt: { fontSize: 24, fontWeight: '700', color: Colors.black, textAlign: 'center', paddingVertical:5 },
    gendertxt:{fontSize:16,fontWeight:'600'},
    btnvire: { borderColor: Colors.black, borderWidth: 1, borderRadius: 10, marginHorizontal: 50,marginVertical:10 }
})