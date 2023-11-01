import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import { Assets } from '../../resources/images/Imagepath';
import { window_height, window_width } from '../../resources/dimensions/dimensions';
import { Colors } from '../../resources/colors/Colors';
import { Strings } from '../../resources/strings/Strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const NameScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={Style.container}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <KeyboardAwareScrollView >
          <Image style={Style.profileicon} source={Assets.profile} />
          <Text style={Style.whatsnametxt}>{Strings.whatsname}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginVertical: 30 }}>
            <Image style={Style.profileplaceholdericon} source={Assets.profileicon} />
            <TextInput style={Style.textinput} placeholderTextColor={Colors.black} placeholder={Strings.yourname} />
          </View>
        </KeyboardAwareScrollView>
        <View style={{ flex: 1,justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('namescreen') }} style={Style.getstartbtn}>
            <Text style={Style.getstarttxt}>{Strings.continue}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('namescreen') }}
            style={[Style.getstartbtn, { backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 25 }]
            }
          >
            <Text style={[Style.getstarttxt, { color: Colors.splash_blue, textDecorationLine: 'underline' }]}>{Strings.skipnow}</Text>
            <Image style={Style.rightarrowicon} source={Assets.rightarrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: { flex: 1 ,backgroundColor: Colors.white},
  profileicon: { height: window_height / 4, width: window_width / 2, resizeMode: 'contain', alignSelf: 'center', marginVertical: 30 },
  profileplaceholdericon: { height: 15, width: 15, resizeMode: 'contain', position: 'absolute', left: 10 },
  whatsnametxt: { fontSize: 24, fontWeight: '700', color: Colors.black, textAlign: 'center' },
  textinput: { borderColor: Colors.textinputborder, borderWidth: 1, borderRadius: 10, width: window_width - 40, paddingLeft: 45, fontSize: 12, fontWeight: '500' },
  getstartbtn: { width: window_width / 1.8, backgroundColor: Colors.getstartbtn, alignSelf: 'center', borderRadius: 10 },
  getstarttxt: { fontSize: 20, color: Colors.white, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  rightarrowicon: { height: 20, width: 20, resizeMode: 'contain', marginLeft: 5 }
});
