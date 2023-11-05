import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../resources/colors/Colors'
import { Assets } from '../../resources/images/Imagepath'
import { window_height, window_width } from '../../resources/dimensions/dimensions'
import { Strings } from '../../resources/strings/Strings'

export const Widgets = ({ navigation }: { navigation: any }) => {
    return (<View style={Style.container}><Image style={Style.watch} source={Assets.widgets} />
        <Text style={Style.identitytxt}>{Strings.widgets1}</Text>
        <Text style={Style.widgets2txt}>{Strings.widgets2}</Text>
        <View style={Style.btmview}>
            <TouchableOpacity onPress={() => { navigation.navigate('feeling') }} style={Style.getstartbtn}>
                <Text style={Style.getstarttxt}>{Strings.continue}</Text>
            </TouchableOpacity>
        </View>
    </View>)
}
const Style = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    identitytxt: { fontSize: 24, fontWeight: '700', color: Colors.black, textAlign: 'center', paddingVertical: 15 },
    widgets2txt: { fontSize: 16, fontWeight: '500', color: Colors.lightgreytxt, textAlign: 'center' },
    watch: { resizeMode: 'contain', width: window_width / 2, alignSelf: 'center', height: window_height / 4, marginTop: 67 },
    getstartbtn: { width: window_width / 1.8, backgroundColor: Colors.getstartbtn, alignSelf: 'center', borderRadius: 10 },
    getstarttxt: { fontSize: 20, color: Colors.white, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
    btmview: { flex: 1, justifyContent: 'flex-end', marginBottom: 20 }
})