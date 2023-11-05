import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../resources/colors/Colors";
import { Assets } from "../../resources/images/Imagepath";
import { window_height, window_width } from "../../resources/dimensions/dimensions";
import { Strings } from "../../resources/strings/Strings";
import { identity } from "./Gender";


export const Gender = ({ navigation }: { navigation: any }) => {
    const [selectedIdentity, setSelectedIdentity] = useState<string>('')
    return (
        <View style={Style.container}>
            <View style={Style.imagecontainer}><Image style={Style.icon} source={Assets.boy_girl} /></View>
            <Text style={Style.identitytxt}>{Strings.identity}</Text>
            <FlatList data={identity}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={[Style.btnvire, { backgroundColor: selectedIdentity == item.name ? Colors.splash_blue : Colors.white }]} onPress={() => { setSelectedIdentity(item.name) }}>
                            <Text style={[Style.identitytxt, { color: selectedIdentity == item.name ? Colors.white : Colors.black }]}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity
                onPress={() => { navigation.navigate('reminder') }}
                style={[Style.getstartbtn, { backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', marginVertical: 25 }]
                }
            >
                <Text style={[Style.getstarttxt, { color: Colors.splash_blue }]}>{Strings.prefernot}</Text>

            </TouchableOpacity>
        </View>
    )
}
const Style = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    imagecontainer: {
        flexDirection: 'row', justifyContent: 'center'
    },
    icon: { height: window_height / 4, width: window_width / 1.8, resizeMode: 'contain' },
    identitytxt: { fontSize: 24, fontWeight: '700', color: Colors.black, textAlign: 'center', paddingVertical: 5 },
    gendertxt: { fontSize: 16, fontWeight: '600' },
    btnvire: { borderColor: Colors.black, borderWidth: 1, borderRadius: 10, marginHorizontal: 70, marginVertical: 10 },
    getstartbtn: { width: window_width / 1.8, backgroundColor: Colors.getstartbtn, alignSelf: 'center', borderRadius: 10 },
    getstarttxt: { fontSize: 20, color: Colors.white, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
    rightarrowicon: { height: 20, width: 20, resizeMode: 'contain', marginLeft: 5 }
})