import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../resources/colors/Colors'
import { Assets } from '../../resources/images/Imagepath'
import { window_height, window_width } from '../../resources/dimensions/dimensions'
import { Strings } from '../../resources/strings/Strings'
import Slider from '@react-native-community/slider';


export const Reminder = ({ navigation }: { navigation: any }) => {
    const [selectedValue, setSelectedValue] = useState<number>(0)
    return (
        <View style={Style.container}><Image style={Style.watch} source={Assets.watch} />
            <Text style={Style.identitytxt}>{Strings.setreminder}</Text>
            <View style={Style.startendview}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={Style.howmanytxt}>{Strings.startat}</Text>
                    <View style={Style.timebox}><Text style={[Style.howmanytxt, { padding: 10 }]}>{Strings.startat}</Text></View>
                </View>
                <View style={Style.starightline}></View>
                <View>
                    <Text style={Style.howmanytxt}>{Strings.endat}</Text>
                    <View style={Style.timebox}><Text style={[Style.howmanytxt, { padding: 10 }]}>{Strings.startat}</Text></View>
                </View>
            </View>
            <View style={Style.howmanytxtview}><Text style={Style.howmanytxt}>{Strings.howmany}</Text>

                <Text style={Style.howmanytxt}>{selectedValue + 'X'}</Text></View>
            <Slider
                style={{ width: 308, height: 40, alignSelf: 'center' }}
                onValueChange={(number) => {
                    setSelectedValue(Math.ceil(number))
                }}
                lowerLimit={0}
                upperLimit={20}
                minimumValue={0}
                maximumValue={20}
                thumbTintColor={Colors.splash_blue}
                minimumTrackTintColor={Colors.textinputborder}
                maximumTrackTintColor={Colors.splash_blue}
            />

            <View style={Style.soundview}><Text style={Style.howmanytxt}>{Strings.sound}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={Style.circlearrow} source={Assets.circlearrow} />
                    <Text style={[Style.howmanytxt, { marginHorizontal: 15 }]}>{Strings.sound}</Text>
                    <Image style={[Style.circlearrow, {
                        transform: [
                            { scaleX: -1 }
                        ]
                    }]} source={Assets.circlearrow} />
                </View>
            </View>

            <View style={Style.btmview}><TouchableOpacity onPress={() => { navigation.navigate('widgets') }} style={Style.getstartbtn}>
                <Text style={Style.getstarttxt}>{Strings.continue}</Text>
            </TouchableOpacity>
            </View></View>
    )
}
const Style = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    identitytxt: { fontSize: 24, fontWeight: '700', color: Colors.black, textAlign: 'center', paddingVertical: 15 },
    watch: { resizeMode: 'contain', width: window_width / 2, alignSelf: 'center', height: window_height / 4, marginTop: 67 },
    btmview: { flex: 1, justifyContent: 'flex-end' },
    getstartbtn: { width: window_width / 1.5, backgroundColor: Colors.getstartbtn, alignSelf: 'center', borderRadius: 10, marginVertical: 20 },
    getstarttxt: { fontSize: 20, color: Colors.white, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
    howmanytxtview: { flexDirection: 'row', width: 290, alignSelf: 'center', justifyContent: 'space-between' },
    howmanytxt: { textAlign: 'center', fontSize: 16, color: Colors.black, fontWeight: '500' },
    startendview: { flexDirection: 'row', marginHorizontal: 35, justifyContent: 'space-evenly', marginVertical: 20 },
    starightline: { color: Colors.textinputborder, borderLeftWidth: 2 },
    timebox: { borderWidth: 1, borderColor: Colors.textinputborder, borderRadius: 10, marginVertical: 10, },
    soundview: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 35 },
    circlearrow: {
        height: 30, width: 30, resizeMode: 'contain',
    }
})