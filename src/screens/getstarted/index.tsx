import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Assets } from '../../resources/images/Imagepath'
import { window_height, window_width } from '../../resources/dimensions/dimensions'
import { Colors } from '../../resources/colors/Colors'
import { Strings } from '../../resources/strings/Strings'

export const GetStarted = ({ navigation }: { navigation: any }) => {
    return (
        <View style={Style.container}>
            <ImageBackground style={Style.reviewimg} source={Assets.reviewimg} />
            <View style={Style.bottomview}>
                <Text style={Style.descriptiontxt}>{Strings.getstartdescription}</Text>
                <Image source={Assets.star} style={Style.starview} />
                <Text style={Style.descriptiontxt2}>{Strings.getstarttxt}</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('namescreen')}} style={Style.getstartbtn}>
                    <Text style={Style.getstarttxt}>{Strings.getstart}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const Style = StyleSheet.create({
    container: { flex: 1 },
    reviewimg: { flex: 1, width: window_width,bottom:30 },
    bottomview: { height: window_height / 3, top: -80, backgroundColor: Colors.white, borderTopLeftRadius: 40, borderTopRightRadius: 40,justifyContent:'space-around',paddingTop:20},
    descriptiontxt: { fontSize: 16,fontWeight:'500', color: Colors.black, textAlign: 'center',marginVertical:20 },
    descriptiontxt2:{fontSize: 12,fontWeight:'500', color: Colors.black, textAlign: 'center',marginVertical:20,bottom:-30},
    starview: { width: window_width / 2, height: 50, resizeMode: 'contain', alignSelf: 'center',marginVertical:20,bottom:-10 },
    getstartbtn: { width:window_width/1.5,backgroundColor: Colors.getstartbtn,alignSelf:'center',borderRadius:10 ,marginVertical:20,bottom:-50},
    getstarttxt: { fontSize: 20, color: Colors.white,fontWeight:'bold',textAlign:'center',marginVertical:10}
})